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

  useEffect(() => {
    const likeRecipe = async () => {
      try {
        const recipe = await axios.get(``, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })
        setIsLikeRecipe(["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340", "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340"]);
      } catch (error) {
        console.log("조회에러", error)
      }
    }
    likeRecipe();
  })
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
