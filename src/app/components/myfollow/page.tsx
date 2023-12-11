/* eslint-disable react-hooks/exhaustive-deps */
import { myFollow } from "@/app/api/myfollow";
import styles from "./css/page.module.css";
import Image from "next/image";

export default function MyFollow() {
  const api = myFollow();

  return (
    <div className={styles.myfollow}>
      {api.isUserFollow.follow4follow.map((value, index) => {
        return (
          <div className={styles.user} key={index}>
            <div className={styles.userimage}>
              <Image
                src={value.follower.picture}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userprofile}>
              <h4>{value.follower.name}</h4>
              <p>comment</p>
            </div>
            <button onClick={(e) => api.followUser(value.follower.id)}>
              팔로우
            </button>
          </div>
        );
      })}
      {api.isUserFollow.followingList.map((value, index) => {
        return (
          <div className={styles.user} key={index}>
            <div className={styles.userimage}>
              <Image
                src={value.follower.picture}
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className={styles.userprofile}>
              <h4>{value.follower.name}</h4>
              <p>comment</p>
            </div>
            <button onClick={(e) => api.followUser(value.follower.id)}>
              팔로우
            </button>
          </div>
        );
      })}
    </div>
  );
}
