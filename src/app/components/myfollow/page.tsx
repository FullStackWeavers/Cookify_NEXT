'use client'
import { useEffect } from 'react'
import styles from './css/page.module.css'
import Image from 'next/image'
import axios from 'axios'

export default function MyFollow() {

  useEffect(()=>{
    try {
      const followUser = () => {
        axios.get("",{
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })
      };
      
    } catch (error) {
      console.log("죄회 에러",error);
    }
  })


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
        <button>팔로우</button>
      </div>
      
    </div>
  )
}
