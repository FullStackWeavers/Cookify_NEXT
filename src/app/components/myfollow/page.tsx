'use client'
import { useEffect, useState } from 'react'
import styles from './css/page.module.css'
import Image from 'next/image'
import axios from 'axios'

interface Follow {
  follow4follow: Array<any>
  followingCount:number
  followingList:Array<any>
}

export default function MyFollow() {
  const [isUserFollow, setIsUserFollow] = useState<Follow>({follow4follow: [], followingCount: 0, followingList: [] })

  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
  const followUser = (userId: any) => {
    axios
      .post(`${BackendBaseURL}/follow/${userId}`, {}, {
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

  useEffect(() => {
    axios
      .get(`${BackendBaseURL}/follow`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setIsUserFollow(response.data)
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);


  return (
    <div className={styles.myfollow}>
      {isUserFollow.follow4follow.map((value, index) => {
        return (
          <div className={styles.user} key={index}>
            <div className={styles.userimage}>
              <Image src={value.follower.picture} alt="" width={50} height={50} />
            </div>
            <div className={styles.userprofile}>
              <h4>{value.follower.name}</h4>
              <p>comment</p>
            </div>
            <button onClick={e => followUser(value.follower.id)}>팔로우</button>
          </div>
        )
      })}
      {isUserFollow.followingList.map((value, index) => {
        return (
          <div className={styles.user} key={index}>
            <div className={styles.userimage}>
              <Image src={value.follower.picture} alt="" width={50} height={50} />
            </div>
            <div className={styles.userprofile}>
              <h4>{value.follower.name}</h4>
              <p>comment</p>
            </div>
            <button onClick={e => followUser(value.follower.id)}>팔로우</button>
          </div>
        )
      })}
    </div>
  )
}
