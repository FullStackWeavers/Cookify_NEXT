/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import MyContent from "./components/mycontent/page";

interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
  like: number;
}

export default function Home() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [isRecipeType, setIsRecipeType] = useState("brief");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const isImg = useState(["1", "2", "3", "4", "5", "6"])
  const [isImgCount, setisImgCount] = useState(0)
  const downContainerRef = useRef(null);


  const likeBtn = (recipeId: number, index: number) => {
    axios
      .post(
        `${BackendBaseURL}/heart/${recipeId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        likeNumber(recipeId, index);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const likeNumber = (recipeId: number, index: number) => {
    axios
      .get(`${BackendBaseURL}/heart/${recipeId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const heartCount = response.data.heartCount;
        const likeData = [...isRecipe];
        likeData[index].like = heartCount;
        console.log(likeData[index].like);
        setIsRecipe(likeData);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const likeTypeUser = () => {
    setCurrentPage(0);
    setIsRecipeType("brief");
    recipeType("brief");
  };
  const likeTypeDocs = () => {
    setCurrentPage(0);
    setIsRecipeType("recipe_docs");
    recipeType("recipe_docs");
  };

  const recipeType = (type: string) => {
    if (type == "brief") {
      axios
        .get(`${BackendBaseURL}/recipe/${type}`, {
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
    } else if (type == "recipe_docs") {
      axios
        .get(`${BackendBaseURL}/recipe/${type}`, {
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

  };

  const userRecipe = (recipeData: SetStateAction<Recipe[]>) => {
    console.log(recipeData);
    for (let i = 0; i < recipeData.length; i++) { }
    setIsRecipe(recipeData);
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
      .get(`${BackendBaseURL}/recipe/${isRecipeType}`, {
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

        userRecipe(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      isImgCount == 5 ? setisImgCount(0) : setisImgCount(isImgCount + 1)
    }, 1000)
  }, [isImgCount])

  return (
    <>
      <Header />
      <MyContent />
      <main className={styles.main}>
        <section className={styles.popular_recipes_container}>
            {isImg[0].map((value, index) => {
              return (
                <span className={styles.image} key={index} style={{display: isImgCount === index ? 'block' : 'none'}}>
                  <Image
                    src={`/main${value}.png`}
                    alt="Profile Image"
                    width={2000}
                    height={550}
                    loading="eager"
                  />
                </span>
              )
            })
            }
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
            <div
              className={styles.downContainer}
              ref={downContainerRef}
              onScroll={handleScroll}
            >
              {isRecipe.map((value, index) => {
                return (
                  <div className={styles.docs_card} key={index}>
                    <Link href={`/detail/${isRecipeType}/${value.recipeId}`}>
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
                    {isRecipeType === "brief" ? (
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
                    ) : null}
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
                Discover a world of delicious recipes with our curated
                selection.
              </em>
              <em>
                Whether you are looking for a quick weeknight dinner or a show-
              </em>
              <em>
                stopping dessert, we have a recipe for every occasion. All our
              </em>
              <em>
                recipes are made with fresh ingredients and easy-to-follow
              </em>
              <em>instructions. Start exploring now!</em>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.card}>
              <Image
                src="/card1.png"
                alt="cardImage"
                width={230}
                height={180}
              />
            </div>
            <div className={styles.card}>
              <Image
                src="/card2.png"
                alt="cardImage"
                width={230}
                height={180}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
