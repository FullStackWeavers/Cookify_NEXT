/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MyContent from "./components/mycontent/mycontent";

interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
  like: number
}

export default function Home() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [isLikeNumber, setIsLikeNumber] = useState<number[]>([]);
  const [isRecipeType, setIsRecipeType] = useState("user")



  const likeBtn = (recipeId: number, index: number) => {
    axios
      .post(`${BackendBaseURL}/heart/${recipeId}`, {}, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        likeNumber(recipeId, index)
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const likeNumber = (recipeId: number, index: number) => {
    axios.get(`${BackendBaseURL}/heart/${recipeId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        const heartCount = response.data.heartCount;
        const likeData = [...isRecipe]
        likeData[index].like = heartCount
        console.log(likeData[index].like);
        setIsRecipe(likeData);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }

  const likeTypeUser = () => {
    recipeType("user")
  }
  const likeTypeDocs = () => {
    recipeType("docs")
  }

  const recipeType = (type: string) => {
    setIsRecipeType(type)
    if (type == "user") {
      axios.get(`${BackendBaseURL}/recipe/brief`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((response) => {
          setIsRecipe(response.data);
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    } else if (type == "docs") {
      axios.get(`${BackendBaseURL}/recipe/recipe_docs`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((response) => {
          setIsRecipe(response.data);
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    }
  }
  const userRecipe = (recipeData: SetStateAction<Recipe[]>) => {
    console.log(recipeData);
    for (let i = 0; i < recipeData.length; i++) {
      
    }
    
    setIsRecipe(recipeData)
  }


  useEffect(() => {
    axios
      .get(`${BackendBaseURL}/recipe/brief`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        userRecipe(response.data)
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <MyContent />
      <main className={styles.main}>
        <section className={styles.popular_recipes_container}>
          <Image
            className={styles.image}
            //src="/popular_recipes_image.png"
            src="/main8.png"
            alt="Profile Image"
            width={2000}
            height={550}
            loading="eager"
          />
        </section>
        <section className={styles.middle_container}>
          <div className={styles.filtered_recipes}>
            <div className={styles.upContainer}>
              <div className={styles.whenBtn}>
                <button onClick={likeTypeUser}>유저 레시피</button>
                <button onClick={likeTypeDocs}>기본 레시피</button>
              </div>
              <Link href="/posting">
                <button className={styles.postBtn}>레시피 작성</button>
              </Link>
            </div>
            <div className={styles.downContainer}>
              {
                isRecipe.map((value, index) => {
                  return (
                    // <Link href={`/detail/${value.recipeId}`} key={index}>
                    <div className={styles.docs_card} key={index}>
                      <Image src={value.thumbnail} alt="Docs Image" width={200} height={150} />
                      <span className={styles.docs_card_name}>{value.title}</span>
                      {isRecipeType === "user" ? <div className={styles.likeBtnBox}>
                        <button className={styles.likeBtn} onClick={e => likeBtn(value.recipeId, index)}>
                          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                          <span>{isRecipe[index].like}</span>
                        </button>
                      </div> : null}
                    </div>
                    // </Link>
                  )
                })}
            </div>
          </div>
        </section>
        <section className={styles.last_container}>
          <div className={styles.word}>
            <span>Browse All Recipes</span>
            <div>
              <em>
                Discover a world of delicious recipes with our curated selection.
              </em>
              <em>
                Whether you are looking for a quick weeknight dinner or a show-
              </em>
              <em>
                stopping dessert, we have a recipe for every occasion. All our
              </em>
              <em>recipes are made with fresh ingredients and easy-to-follow</em>
              <em>instructions. Start exploring now!</em>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.card}>
              <Image src="/card1.png" alt="cardImage" width={230} height={180} />
            </div>
            <div className={styles.card}>
              <Image src="/card2.png" alt="cardImage" width={230} height={180} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
