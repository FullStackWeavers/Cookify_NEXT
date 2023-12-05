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

export default function Home() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipeTypeOpen, setIsRecipeTypeOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isRecipeSourceOpen, setIsRecipeSourceOpen] = useState(false);
  const [isRecipe, setIsRecipe] = useState<string[]>([]);

  const likeBtn = () => {
    axios
      .post(`${BackendBaseURL}/heart/4`, {
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
          src="/popular_recipes_image.png"
          alt="Profile Image"
          width={2000}
          height={600}
          loading="eager"
        />
      </section>
      <section className={styles.middle_container}>
        <div className={styles.filter_recipes}>
          <h2 className={styles.filter_recipes_title}>Filter Recipes</h2>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3>Recipe type</h3>
              <button onClick={clickRecipeTypeBtn}>
                {!isRecipeTypeOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isRecipeTypeOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isRecipeTypeOpen && (
              <ul className={styles.content_list}>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항1
                </li>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항2
                </li>
              </ul>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3>Ingredients</h3>
              <button onClick={clickIngredientsBtn}>
                {!isIngredientsOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isIngredientsOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isIngredientsOpen && (
              <ul className={styles.content_list}>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항1
                </li>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항2
                </li>
              </ul>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3>Difficulty</h3>
              <button onClick={clickDifficultyBtn}>
                {!isDifficultyOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isDifficultyOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isDifficultyOpen && (
              <ul className={styles.content_list}>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항1
                </li>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항2
                </li>
              </ul>
            )}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3>Recipe Source</h3>
              <button onClick={clickRecipeSourceBtn}>
                {!isRecipeSourceOpen && (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
                {isRecipeSourceOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isRecipeSourceOpen && (
              <ul className={styles.content_list}>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항1
                </li>
                <li>
                  <input className={styles.checkBox} type="checkbox" />
                  선택사항2
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className={styles.filtered_recipes}>
          <div className={styles.upContainer}>
            <div className={styles.whenBtn}>
              <button>아침</button>
              <button>점심</button>
              <button>저녁</button>
              <button>디저트</button>
            </div>
            <Link href="/posting">
              <button className={styles.postBtn}>레시피 작성</button>
            </Link>
          </div>
          <div className={styles.downContainer}>
            {isRecipe.map((value, index) => {
              return (
                <div className={styles.docs_card} key={index}>
                  <Image
                    src={value.thumbnail}
                    alt="Docs Image"
                    width={200}
                    height={150}
                  />
                  <span className={styles.docs_card_name}>{value.title}</span>
                  <div className={styles.likeBtnBox}>
                    <button className={styles.likeBtn} onClick={likeBtn}>
                      <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                      <span>15</span>
                    </button>
                  </div>
                </div>
              );
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
