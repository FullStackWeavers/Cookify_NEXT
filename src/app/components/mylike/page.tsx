'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'


export default function MyLike() {

  const [isCount, setIsCount] = useState(15)
  const [isLikeRecipe, setIsLikeRecipe] = useState<string[]>([])

  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
  useEffect(() => {
    axios
      .get(`${BackendBaseURL}/heart`, {
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
  }, []);
  return (
    <div className={styles.mylike}>
      <div className={styles.recipe}>
        {isLikeRecipe.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item} alt="" width={275} height={200} />
              <p>recipe name</p>
              <button>
                <FontAwesomeIcon icon={faHeart} />
                <span>{isCount}</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
