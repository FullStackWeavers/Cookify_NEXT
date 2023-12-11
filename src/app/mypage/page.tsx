"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/page.module.css";
import {
  faBook,
  faHeart,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import MyInfo from "../components/myinfo/page";
import MyRecipe from "../components/myrecipe/page";
import MyFollow from "../components/myfollow/page";
import MyLike from "../components/mylike/page";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import MyContent from "../components/mycontent/page";

export default function MyPage() {
  const [isMyPage, setIsMyPage] = useState("MyInfo");

  const MyPageClick = (name: string) => {
    setIsMyPage(name);
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log("Logout successful");
        sessionStorage.setItem("isLogin", "false");
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  const MyPageCheack = () => {
    switch (isMyPage) {
      case "MyInfo":
        return <MyInfo />;
      case "MyFollow":
        return <MyFollow />;
      case "MyRecipe":
        return <MyRecipe />;
      case "MyLike":
        return <MyLike />;
      default:
        return null;
    }
  };

  return (
    <>
      <MyContent />
      <main className={styles.main}>
        <div className={styles.mypageBar}>
          <Link href={"/"}>
            <h2>Cookify</h2>
          </Link>
          <div className={styles.barMenu1}>
            <button
              className={isMyPage == "MyInfo" ? styles.onPage : ""}
              onClick={() => MyPageClick("MyInfo")}
            >
              <FontAwesomeIcon className={styles.barIcon} icon={faUser} />내
              정보
            </button>
            <button
              className={isMyPage == "MyFollow" ? styles.onPage : ""}
              onClick={() => MyPageClick("MyFollow")}
            >
              <FontAwesomeIcon className={styles.barIcon} icon={faUsers} />
              팔로워
            </button>
            <button
              className={isMyPage == "MyRecipe" ? styles.onPage : ""}
              onClick={() => MyPageClick("MyRecipe")}
            >
              <FontAwesomeIcon className={styles.barIcon} icon={faBook} />
              나의 레시피
            </button>
            <button
              className={isMyPage == "MyLike" ? styles.onPage : ""}
              onClick={() => MyPageClick("MyLike")}
            >
              <FontAwesomeIcon className={styles.barIcon} icon={faHeart} />
              좋아요
            </button>
          </div>
        </div>
        <div>{MyPageCheack()}</div>
      </main>
    </>
  );
}
