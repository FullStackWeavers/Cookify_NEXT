/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import styles from "./css/page.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
  like: number;
}

export default function SearchRecipe() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const downContainerRef = useRef(null);


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
      .get(`${BackendBaseURL}/recipe/recipe_docs`, {
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
      .get(`${BackendBaseURL}/recipe/recipe_docs`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setIsRecipe(response.data)
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
            <Link href={`/detail/recipe_docs/${value.recipeId}`}>
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
          </div>
        );
      })}
    </div>
  );
}
