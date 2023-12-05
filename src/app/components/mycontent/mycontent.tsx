"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./css/mycontent.css";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import MyChat from "../modal/chat/page";
import MyAlarm from "../modal/alarm/page";

export default function MyContent() {
  const [isHidden, setIsHidden] = useState(true);
  const [isChat, setIsChat] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" });
  const [isLogin, setIsLogin] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedIsLogin = sessionStorage.getItem("isLogin");
        setIsLogin(storedIsLogin === "true");

        if (currentPath === "/start") {
          setIsHidden(false);
        } else {
          setIsHidden(true);
        }

        if (storedIsLogin === "true") {
          const response = await axios.get(
            "http://localhost:8080/api/auth/user",
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          const userData = response.data;

          sessionStorage.setItem("isUser", JSON.stringify(userData));
          setIsUser(userData);
        }
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [currentPath]);

  const ChatModalClick = () => {
    setIsChat(!isChat);
    setIsAlarm(false);
  };

  const AlarmModalClick = () => {
    setIsAlarm(!isAlarm);
    setIsChat(false);
  };

  const LoginClick = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/auth/user", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const userData = response.data;

      sessionStorage.setItem("isLogin", "true");
      sessionStorage.setItem("isUser", JSON.stringify(userData));

      setIsUser(userData);
      setIsLogin(true);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  const LogoutClick = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/logout", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("isUser");

      setIsLogin(false);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  return isHidden ? (
    <div className="container">
      <button onClick={ChatModalClick}>
        <FontAwesomeIcon className="icon" icon={faComment} />
      </button>
      {isChat ? <MyChat ChatModalClick={ChatModalClick} /> : null}
      <button onClick={AlarmModalClick}>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </button>
      {isAlarm ? <MyAlarm AlarmModalClick={AlarmModalClick} /> : null}
      {isLogin === true ? (
        <Link href="/">
          <button onClick={LogoutClick}>
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
          </button>
        </Link>
      ) : null}
      {isLogin === true ? (
        <div>
          <Link href="/mypage">
            <div className="profile">
              <Image
                className="icon"
                src={isUser.picture}
                alt="Profile Image"
                width={50}
                height={50}
              />
            </div>
          </Link>
        </div>
      ) : (
        <Link href="/start">
          <button onClick={LoginClick}>login</button>
        </Link>
      )}
    </div>
  ) : null;
}
