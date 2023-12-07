/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
}

export default function Home() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipeTypeOpen, setIsRecipeTypeOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isRecipeSourceOpen, setIsRecipeSourceOpen] = useState(false);
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [isLikeNumber, setIsLikeNumber] = useState<number>()

  const likeBtn = (recipeId: number) => {
    axios
      .post(`${BackendBaseURL}/heart/${recipeId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const likeNumber = (recipeId: number) => {
    axios.get(`${BackendBaseURL}/heart/${recipeId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data);
        // if (response.data == 0) {
        //   setIsLikeNumber(0)
        // }
        // setIsLikeNumber(response.data)
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
          console.log(response.data);
          
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    }
  }

  const clickRecipeTypeBtn = () => {
    if (isRecipeTypeOpen === false) {
      setIsRecipeTypeOpen(true);
    } else {
      setIsRecipeTypeOpen(false);
    }
  };
  const clickIngredientsBtn = () => {
    if (isIngredientsOpen === false) {
      setIsIngredientsOpen(true);
    } else {
      setIsIngredientsOpen(false);
    }
  };
  const clickDifficultyBtn = () => {
    if (isDifficultyOpen === false) {
      setIsDifficultyOpen(true);
    } else {
      setIsDifficultyOpen(false);
    }
  };
  const clickRecipeSourceBtn = () => {
    if (isRecipeSourceOpen === false) {
      setIsRecipeSourceOpen(true);
    } else {
      setIsRecipeSourceOpen(false);
    }
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
        setIsRecipe(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return (
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
                likeNumber(value.recipeId)
                return (
                  // <Link href={`/detail/${value.recipeId}`} key={index}>
                  <div className={styles.docs_card} key={index}>
                    <Image src={value.thumbnail} alt="Docs Image" width={200} height={150} />
                    <span className={styles.docs_card_name}>{value.title}</span>
                    <div className={styles.likeBtnBox}>
                      <button className={styles.likeBtn} onClick={e => likeBtn(value.recipeId)}>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                        <span>{isLikeNumber}</span>
                      </button>
                    </div>
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
  );
}
