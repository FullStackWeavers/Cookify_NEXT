/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/detail.module.css";
import {
  faArrowTurnDown,
  faEllipsis,
  faListOl,
  faMessage,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Header from "@/app/components/header/page";
import MyContent from "@/app/components/mycontent/page";

export default function Detail(params: { params: { recipeId: any; }; }) {
  const backendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState({
    title: "",
    thumbnail: "",
    ingredients: "",
    ingredients2: "",
    steps: "",
  });
  const [isIngredients, setIsIngredients] = useState<string[]>([]);
  const [isIngredients2, setIsIngredients2] = useState<string[]>([]);
  const [theIngredients2, setTheIsIngredients2] = useState(false);
  const [isRecipeSteps, setIsRecipeSteps] = useState<string[]>([]);
  const recipeType = params.params.recipeId[0]
  const recipeId = params.params.recipeId[1]

  const reIngredients = (data: { ingredients: any }) => {
    let a = data.ingredients.replace(/구매/g, " ");
    let b = a.split(",");
    setIsIngredients(b);
  };

  const reIngredients2 = (data: { ingredients2: any }) => {
    let a = data.ingredients2.replace(/구매/g, " ");
    let b = a.split(",");
    setIsIngredients2(b);
    Ingredients2();
  };

  const Ingredients2 = () => {
    setTheIsIngredients2(isIngredients2.length > 1 ? true : false);
  };

  const recipeSteps = async (data: { steps: any }) => {
    const redata = data.steps.split(".");
    const reSteps: SetStateAction<string[]> = [];
    for (let i = 0; i < redata.length; i++) {
      if (redata[i].charAt(0) == ",") {
        reSteps.push(redata[i].slice(1, redata[i].length - 1));
      } else {
        reSteps.push(redata[i]);
      }
    }
    setIsRecipeSteps(reSteps);
  };

  useEffect(() => {
    if (recipeType == "recipe_docs") {
      axios.get(
        `${backendBaseURL}/recipe/${recipeType}/${recipeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      ).then((response) => {
        setIsRecipe(response.data);
        reIngredients(response.data);
        reIngredients2(response.data);
        recipeSteps(response.data);
      })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    } else if (recipeType == "brief") {
      axios.get(`${backendBaseURL}/recipe/${recipeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      ).then((response) => {
        setIsRecipe(response.data);
        reIngredients(response.data);
        reIngredients2(response.data);
        recipeSteps(response.data);
      })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    }
  }, []);

  return (
    <>
    <Header/>
    <MyContent />
      <main className={styles.main}>
        <section className={styles.photoSection}>
          <div className={styles.photoSection_titleDiv}>
            <span>[{isRecipe.title}]</span>
          </div>
          <div className={styles.photoSection_photoDiv}>
            <Image
              src={isRecipe.thumbnail}
              alt="FootPhoto"
              width={1000}
              height={400}
              layout="responsive"
            ></Image>
          </div>
          <div className={styles.photoSection_userDiv}>
            {recipeType == "brief" ? <div className={styles.userCard}>
              <Image
                className={styles.userCard_profileImage}
                src={"/profile.png"}
                alt="profileImage"
                width={50}
                height={50}
              ></Image>
              <span className={styles.userCard_userName}>유저 이름</span>
            </div> : null}
            {recipeType == "brief" ? <div className={styles.followCard}>
              <button className={styles.followBtn}>팔로우</button>
              <div className={styles.heartBtn}>
                <svg
                  className={styles.heartIcon}
                  fill="#ff0000"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <style></style>
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
                <span className={styles.heartNumber}>15</span>
              </div>
            </div> : null}
          </div>
        </section>
        <section className={styles.ingredientsSection}>
          <div className={styles.ingredientsSection_titleDiv}>
            <FontAwesomeIcon icon={faUtensils} className={styles.Icon} />
            <span>재료</span>
          </div>
          <div className={styles.ingredientsSection_contentDivContainer}>
            <div className={styles.ingredientsSection_contentDiv}>
              {isIngredients.map((item, index) => {
                return (
                  <div key={index} className={styles.ingredientDiv}>
                    <span className={styles.name}>{item}</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.ingredientsSection_contentDiv}>
              {theIngredients2
                ? isIngredients2.map((item, index) => {
                  return (
                    <div key={index} className={styles.ingredientDiv}>
                      <span className={styles.name}>{item}</span>
                    </div>
                  );
                })
                : null}
            </div>
          </div>
          <div className={styles.ingredientsSection_buttonDiv}>
            <button>재료 전부 구매</button>
          </div>
        </section>
        <section className={styles.makingNumberSection}>
          <div className={styles.makingNumberSection_titleDiv}>
            <FontAwesomeIcon icon={faListOl} className={styles.icon} />
            <span>조리 순서</span>
          </div>
          <div className={styles.makingNumberSection_NumberCardDiv}>
            {isRecipeSteps.map((item, index) => {
              return item.length > 1 ? (
                <div key={index} className={styles.card}>
                  <div className={styles.number}>
                    <div className={styles.greenBox}>
                      <span>{index + 1}</span>
                    </div>
                  </div>
                  <div className={styles.explain}>
                    <span>{item}</span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </section>
        <section className={styles.commentsSection}>
          <div className={styles.commentsSection_titleDiv}>
            <FontAwesomeIcon icon={faMessage} className={styles.icon} />
            <span>댓글</span>
          </div>
          <div className={styles.commentsSection_commentsDiv}>
            <div className={styles.commentsSection_commentDiv}>
              <div className={styles.commentsSection_profileImageDiv}>
                <Image
                  src={"/profile.png"}
                  alt="profileImage"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <div className={styles.commentsSection_middleDiv}>
                <span>User Name</span>
                <div className={styles.commentsSection_middleDiv_content}>
                  <span>Text</span>
                </div>
              </div>
              <button className={styles.commentsSction_lastDIv}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
            <div className={styles.commentsSection_comment_commentsDiv}>
              <FontAwesomeIcon className={styles.icon} icon={faArrowTurnDown} />
              <div className={styles.commentsSection_comment_commentDiv}>
                <Image
                  src={"/profile.png"}
                  alt="profileImage"
                  width={50}
                  height={50}
                ></Image>
                <div className={styles.commentsSection_middleDiv}>
                  <span>User Name</span>
                  <div className={styles.commentsSection_middleDiv_content}>
                    <span>Text</span>
                  </div>
                </div>
                <button className={styles.commentsSction_lastDIv}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.commentsSection_commetingDiv}>
            <div className={styles.profileImage}>
              <Image
                src={"/profile.png"}
                alt="MyProfileImage"
                width={50}
                height={50}
              ></Image>
            </div>
            <div className={styles.middleDiv}>
              <input type="text" placeholder="여기에 댓글을 입력하세요." />
            </div>
            <div className={styles.lastDiv}>
              <button>댓글 달기</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
