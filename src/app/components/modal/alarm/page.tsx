"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../alarm/css/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWebSocket from "react-use-websocket";
import { useState } from "react";

export default function MyAlarm(props: { AlarmModalClick: any }) {
  const { AlarmModalClick } = props;
  const [websocketData, setWebsocketData] = useState<any[]>([]);
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    "ws://localhost:8080/push",
    {
      onMessage: (event) => {
        const data = [...websocketData]
        setWebsocketData(() => [...data, event.data]);
      },
    }
  );
  
  return (
    <div className={styles.alarm}>
      <div className={styles.alarmbar}>
        <button onClick={AlarmModalClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      {websocketData.map((value, index) => {
        return (
          <div className={styles.container} key={index}>
            <div>
              <p>{value}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}
