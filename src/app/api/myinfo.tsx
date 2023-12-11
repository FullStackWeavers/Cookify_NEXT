/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";

export default function myInfo() {
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" });
  const [isBtn, setIsBtn] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    const userData = { ...isUser, name: e.target.value };
    setIsUser(userData);
  };

  const changeUser = () => {
    setIsBtn(!isBtn);
    console.log(isBtn);
    if (isBtn) {
      console.log(isUser);
      axios
        .put("http://localhost:8080/api/auth/update", isUser, {
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
  };

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
          const imgUrl: string = response.data;
          const userdata = { ...isUser, picture: imgUrl };
          setIsUser(userdata);
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

  return {
    isUser,
    isBtn,
    fileInputRef,
    imageUpload,
    changeName,
    changeUser,
    handleImageChange,
  };
}
