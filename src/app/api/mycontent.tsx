/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import useWebSocket from "react-use-websocket";

export function myContent() {
  const [isHidden, _setIsHidden] = useState(true);
  const [isChat, setIsChat] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" });
  const [isLogin, setIsLogin] = useState(false);
  const currentPath = usePathname();
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    "ws://localhost:8080/push",
    {
      onMessage: (event) => {
        // WebSocket 메시지를 받았을 때의 로직을 추가
        // 예: 서버에서 알림이 오면 setIsAlarm(true) 등
      },
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedIsLogin = sessionStorage.getItem("isLogin");
        setIsLogin(storedIsLogin === "true");

        if (storedIsLogin === "true") {
          const response = await axios.get(`${BackendBaseURL}/api/auth/user`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
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

  const AlarmModalClick = () => {
    setIsAlarm(!isAlarm);
    setIsChat(false);
  };

  const LoginClick = async () => {
    try {
      const response = await axios.get(`${BackendBaseURL}/api/auth/user`, {
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
      console.error("로그인 중 오류 발생:", error);
    }
  };

  const LogoutClick = async () => {
    try {
      await axios.post(`${BackendBaseURL}/api/auth/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("isUser");

      setIsLogin(false);
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return {
    isHidden,
    isLogin,
    isUser,
    isChat,
    isAlarm,
    AlarmModalClick,
    LoginClick,
    LogoutClick,
    sendJsonMessage,
  };
}
