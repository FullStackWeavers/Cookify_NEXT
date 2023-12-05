"use strict";
import Image from "next/image";
import styles from "./css/myinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyInfo() {
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/user", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setIsUser(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <div className={styles.profileImage}>
            <div className={styles.ImageContainer}>
              <Image
                src={isUser.picture}
                alt="profileImage"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.changePhoto}>
            <button className={styles.button}>
              <FontAwesomeIcon icon={faCamera} className={styles.icon} />
              <span>이미지 수정</span>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p>이메일</p>
            <div className={styles.inputButtonBox}>
              <div className={styles.inputBox}>
                <input type="text" placeholder={isUser.email} />
              </div>
            </div>
            <p>이름</p>
            <div className={styles.inputButtonBox}>
              <div className={styles.inputBox}>
                <input type="text" placeholder={isUser.name} />
              </div>
              <button className={styles.buttonBox}>
                <span>수정</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
