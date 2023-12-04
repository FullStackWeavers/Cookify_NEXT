"use client";

<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/mycontent.css";
import { faBell, faComment } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MyChat from "../modal/chat/page";
import MyAlarm from "../modal/alarm/page";
import axios from "axios";
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/mycontent.css'
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MyChat from "../modal/chat/page"
import MyAlarm from '../modal/alarm/page';
>>>>>>> d01a9c417ea6608f82e91712e0cc43675a502be3

export default function MyContent() {
  const [isHidden, setIsHidden] = useState(true);
  const [isChat, setIsChat] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);
  const currentPath = usePathname();
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

  useEffect(() => {
    if (currentPath === "/start") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [currentPath]);

  const ChatModalClick = () => {
    setIsChat(!isChat);
    setIsAlarm(false);
  };

  const AlarmModalClick = () => {
    setIsAlarm(!isAlarm);
    setIsChat(false);
  };

  const LoginClick = () => {};

  return isHidden ? (
    <div className="container">
      <button onClick={ChatModalClick}>
        <FontAwesomeIcon className="icon" icon={faComment} />
      </button>
      {isChat ? <MyChat ChatModalClick={ChatModalClick} /> : null}
      <button onClick={AlarmModalClick}>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </button>
<<<<<<< HEAD
      {isAlarm ? <MyAlarm AlarmModalClick={AlarmModalClick} /> : null}
      {isUser !== null ? (
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
=======
      {isAlarm ? <MyAlarm  AlarmModalClick = {AlarmModalClick}/> : null}
      <Link href="/mypage">
        <div className='profile'>
          <Image className='icon' src="/profile.png" alt="Profile Image" width={50} height={50} />
>>>>>>> d01a9c417ea6608f82e91712e0cc43675a502be3
        </div>
      ) : (
        <Link href="/start">
          <button onClick={LoginClick}>login</button>
        </Link>
      )}
    </div>
  ) : null;
}
