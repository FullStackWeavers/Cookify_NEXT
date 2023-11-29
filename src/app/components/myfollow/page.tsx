'use client'
import styles from './css/page.module.css'
import Image from 'next/image'

export default function MyFollow() {

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
