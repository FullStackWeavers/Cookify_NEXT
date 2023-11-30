'use client'

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import styles from "../alarm/css/page.module.css"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MyAlarm(props: { AlarmModalClick: any }) {
  const { AlarmModalClick } = props
  return (
    <div className={styles.alarm}>
      <div className={styles.alarmbar}>
        <button onClick={AlarmModalClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className={styles.container}>
        <div>
          <Image src='/profile.png' alt="" width={50} height={50} />
        </div>
        <div>
          <h4>username</h4>
          <p>좋아요</p>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <Image src='/profile.png' alt="" width={50} height={50} />
        </div>
        <div>
          <h4>username</h4>
          <p>좋아요</p>
        </div>
      </div>
    </div>
  )
}