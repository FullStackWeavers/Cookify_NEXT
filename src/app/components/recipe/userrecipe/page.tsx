/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import styles from "./css/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Main } from "@/app/api/main";

interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
  like: number;
}

export default function UserRecipe() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const downContainerRef = useRef(null);


  const likeBtn = async(recipeId: number, index: number) => {
    await axios
      .post(
        `${BackendBaseURL}/heart/${recipeId}`, {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const likeNumber = async (recipeData: any) => {
    try {
      const likeRecipe = recipeData.map(async (value: any) => {
        const response = await axios.get(`${BackendBaseURL}/heart/${value.recipeId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        const heartCount = response.data.heartCount;
        return { ...value, like: heartCount };
      });
      const recipe = await Promise.all(likeRecipe);
      setIsRecipe(recipe)
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  const handleScroll = () => {
    const container = downContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollHeight - scrollTop - clientHeight < 100 && !loading) {
        loadMoreData();
      }
    }
  };

  const loadMoreData = () => {
    setLoading(true);
    axios
      .get(`${BackendBaseURL}/recipe/brief`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: { page: currentPage + 1 },
        withCredentials: true,
      })
      .then((response) => {
        const newData = response.data;
        if (newData.length == 20) {
          setIsRecipe(() => [...isRecipe, ...newData]);
          setCurrentPage(() => currentPage + 1);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`${BackendBaseURL}/recipe/brief`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);

        likeNumber(response.data)
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return (
    <div
      className={styles.downContainer}
      ref={downContainerRef}
      onScroll={handleScroll}
    >
      {isRecipe.map((value, index) => {
        return (
          <div className={styles.docs_card} key={index}>
            <Link href={`/detail/brief/${value.recipeId}`}>
              <Image
                src={value.thumbnail}
                alt="Docs Image"
                width={200}
                height={150}
              />
              <span className={styles.docs_card_name}>
                {value.title}
              </span>
            </Link>
            <div className={styles.likeBtnBox}>
              <button
                className={styles.likeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  likeBtn(value.recipeId, index);
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.icon}
                />
                <span>{isRecipe[index].like}</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
