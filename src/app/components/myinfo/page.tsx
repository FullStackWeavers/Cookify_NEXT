"use client";
import Image from "next/image";
import styles from "./css/myinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

export default function MyInfo() {
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" });
  const [isBtn, setIsBtn] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const userData = { ...isUser, name: e.target.value }
    setIsUser(userData)
  }

  const changeUser = () => {
    setIsBtn(!isBtn)
    console.log(isBtn);
    if(isBtn){
    console.log(isUser);
    axios.put("http://localhost:8080/api/auth/update", isUser, {
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
    }
  }


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const data = new FormData();
      data.append("file", e.target.files[0]);

      axios
        .post("http://localhost:8080/recipe/image", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then((response) => {
          const imgUrl: string = response.data
          const userdata = { ...isUser, picture: imgUrl }
          setIsUser(userdata)
        })
        .catch((error) => {
          console.log("에러 응답:", error.response);
        });
    }
  };


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
            {isBtn ? <button className={styles.button} onClick={imageUpload}>
              <FontAwesomeIcon icon={faCamera} className={styles.icon} />
              <span>이미지 수정</span>
            </button> : ""}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p>이메일</p>
            <div className={styles.inputButtonBox}>
              <div>
                <p>{isUser.email}</p>
              </div>
            </div>
            <p>이름</p>
            <div className={styles.inputButtonBox}>
              <div className={isBtn ? styles.inputBox : ""}>
                {isBtn ? <input type="text" placeholder={isUser.name} onChange={(e) => changeName(e)} /> : <p>{isUser.name}</p>}
              </div>
            </div>
          </div>
          <button onClick={changeUser}>{isBtn ? "저장" : "수정"}</button>
        </div>
      </div>
    </div>
  );
}
