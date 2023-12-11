"use client";

import { useState } from "react";
import styles from "./css/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import Image from "next/image";
import ChatRoom from "../../chatroom/page";

export default function MyChat(props: { ChatModalClick: any }) {
  const { ChatModalClick } = props;
  const [isSmallChat, setIsSmallChat] = useState(true);
  const [isChatRoom, setIsChatRoom] = useState(false);
  const SmallBtn = () => {
    setIsSmallChat(!isSmallChat);
  };

  const ChatRoomBtn = () => {
    setIsChatRoom(!isChatRoom);
  };

  return isSmallChat ? (
    <Draggable>
      <div className={styles.chat}>
        <div className={styles.chatbar}>
          <button onClick={SmallBtn}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button onClick={ChatModalClick}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {isChatRoom ? (
          <ChatRoom ChatRoomBtn={ChatRoomBtn} />
        ) : (
          <div className={styles.memberlist}>
            <button className={styles.member} onClick={ChatRoomBtn}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
            <button className={styles.member}>
              <div className={styles.profile}>
                <Image src={"/profile.png"} alt={""} width={50} height={50} />
              </div>
              <div className={styles.comment}>
                <h4>username</h4>
                <p>집에 가고싶다.</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </Draggable>
  ) : (
    <Draggable>
      <div className={styles.smallchat}>
        <button onClick={SmallBtn}>
          <FontAwesomeIcon className="icon" icon={faComment} />
        </button>
      </div>
    </Draggable>
  );
}
