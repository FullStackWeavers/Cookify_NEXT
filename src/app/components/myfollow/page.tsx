'use client'
import { useEffect } from 'react'
import styles from './css/page.module.css'
import Image from 'next/image'
import axios from 'axios'

export default function MyFollow() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
  const followUser = () => {
    axios
      .post(`${BackendBaseURL}/follow/3`, {
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

  // useEffect(() => {
  //   axios
  //     .get(`${BackendBaseURL}/follow/3`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("API 호출 중 오류 발생:", error);
  //     });
  // }, []);


  return (
    <div className={styles.myfollow}>
      <div className={styles.user}>
        <div className={styles.userimage}>
          <Image src="/profile.png" alt="" width={50} height={50} />
        </div>
        <div className={styles.userprofile}>
          <h4>username</h4>
          <p>comment</p>
        </div>
        <button onClick={followUser}>팔로우</button>
      </div>

    </div>
  )
}
