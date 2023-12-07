import Image from 'next/image'
import styles from './css/page.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Recipe {
  recipeId:number;
  title: string;
  thumbnail: string;
}

export default function MyRecipe() {
  const [isMyRecipe, setIsMyRecipe] = useState<Recipe[]>([])

  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT
  useEffect(() => {
    axios
      .get(`${BackendBaseURL}/recipe/myRecipe`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setIsMyRecipe(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className={styles.mypage__component}>
      <h3>나의 레시피</h3>
      <div className={styles.mypage__component__recipe}>
        {
          isMyRecipe.map((value, index) => {
            return (<div key={index}>
              <Image src={value.thumbnail} alt="" width={250} height={200} />
              <p>{value.title}</p>
            </div>)
          })
        }
      </div>
    </div>
  )
}
