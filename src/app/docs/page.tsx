'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faEllipsis, faHeart, faMessage, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'

export default function Docs() {
  const [isRecipe, setIsRecipe] = useState({ title: "", thumbnail: "", ingredients: "", ingredients2: "", steps: "" })
  const [isIngredients, setIsIngredients] = useState<string[]>([]);
  const [isIngredients2, setIsIngredients2] = useState<string[]>([]);
  const [theIngredients2, setTheIsIngredients2] = useState(false);
  const [isRecipeSteps, setIsRecipeSteps] = useState<string[]>([]);

  const reIngredients = (data: { ingredients: any }) => {
    let a = (data.ingredients).replace(/구매/g, ' ')
    let b = a.split(",")
    setIsIngredients(b)
  }

  const reIngredients2 = (data: { ingredients2: any }) => {
    let a = (data.ingredients2).replace(/구매/g, ' ')
    let b = a.split(",")
    setIsIngredients2(b)
    Ingredients2();
  }

  const Ingredients2 = () => {
    setTheIsIngredients2(isIngredients2.length > 1 ? true : false)
  }

  const recipeSteps = async(data: { steps: any }) => {
    const redata = (data.steps).split('.')
    const reSteps: SetStateAction<string[]> = []
    for (let i = 0; i < redata.length; i++) {
      if(redata[i].charAt(0) == ","){
        reSteps.push(redata[i].slice(1, redata[i].length -1))
      }else{
        reSteps.push(redata[i])
      }
    }
    setIsRecipeSteps(reSteps);
  }

  useEffect(() => {
    const docsData = async () => {
      try {
        const recipeDocs = await axios.get("http://localhost:8080/recipe/recipe_docs/14");
        setIsRecipe(recipeDocs.data);
        reIngredients(recipeDocs.data);
        reIngredients2(recipeDocs.data);
        recipeSteps(recipeDocs.data);
      } catch (error) {
        alert('조회 에러');
      }
    };
    docsData();
  }, []);


  return (
    <main className={styles.main}>
      <div className={styles.docs__title}>
        <p>{isRecipe.title}</p>
        <img src={isRecipe.thumbnail} alt="" />
        <div>
          <span>
            <img src="/profile.png" alt="" />
            <p>user name</p>
          </span>
          <div>
            <button>팔로우</button>
            <button className={styles.like}>
              <FontAwesomeIcon icon={faHeart} />
              <p>15</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.docs__ingredient}>
        <h1>
          <FontAwesomeIcon icon={faUtensils} />
          <span>재료</span>
        </h1>
        <div className={styles.docs__ingredient__list}>
          <div>
            <h2>[재료]</h2>
            {
              isIngredients.map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <li>
                    <ul>
                      <p>{item}</p>
                    </ul>
                  </li>
                )
              })
            }
          </div>
          <div>
            {theIngredients2 ?
              <>
                <h2>[재료2]</h2>
                {isIngredients2.map((item) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <li>
                      <ul>
                        <p>{item}</p>
                      </ul>
                    </li>
                  )
                })}
              </>
              : null}

          </div>
        </div>

        <button className={styles.mycart__button}>
          구매
        </button>
      </div>

      <div className={styles.docs__ricipe}>
        <h1>
          <FontAwesomeIcon icon={faUtensils} />
          <span>조리순서</span>
        </h1>
        <div className={styles.docs__ricipe__list}>
          {isRecipeSteps.map((item, index) => {
            return (
              item.length > 1 ?
              <li>
                <ul>
                  <div>
                    <p>{index + 1}</p>
                  </div>
                  <p className={styles.docs__ricipe__comment}>{item}</p>
                </ul>
              </li>
            :null
            )
          })}
        </div>
      </div>

      <div className={styles.docs__comment}>
        <h1>
          <FontAwesomeIcon icon={faMessage} />
          <span>댓글</span>
        </h1>
        <p className={styles.docs__comment__line}></p>
        <div>
          <img src="/profile.png" alt="" />
          <div>
            <div>
              <p>username</p>
              <FontAwesomeIcon className={styles.docs__comment__icon} icon={faEllipsis} />
            </div>
            <span>채팅내용 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum qui porro quo perferendis deleniti fugiat ea, eligendi dicta sapiente velit soluta illum culpa corrupti iste quis doloribus quia. Sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum obcaecati quas. Veniam magni debitis possimus ab autem nostrum, blanditiis corrupti et odit eligendi quibusdam consequuntur fugit neque, maxime voluptate.</span>
          </div>
        </div>
        <div className={styles.docs__comment__comment}>
          <img src="/profile.png" alt="" />
          <div>
            <div>
              <p>username</p>
              <FontAwesomeIcon className={styles.docs__comment__icon} icon={faEllipsis} />
            </div>
            <span>채팅내용 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum qui porro quo perferendis deleniti fugiat ea, eligendi dicta sapiente velit soluta illum culpa corrupti iste quis doloribus quia. Sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum obcaecati quas. Veniam magni debitis possimus ab autem nostrum, blanditiis corrupti et odit eligendi quibusdam consequuntur fugit neque, maxime voluptate.</span>
          </div>
        </div>
        <div className={styles.docs__comment__comment}>
          <img src="/profile.png" alt="" />
          <div>
            <div>
              <p>username</p>
              <FontAwesomeIcon className={styles.docs__comment__icon} icon={faEllipsis} />
            </div>
            <span>채팅내용 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum qui porro quo perferendis deleniti fugiat ea, eligendi dicta sapiente velit soluta illum culpa corrupti iste quis doloribus quia. Sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum obcaecati quas. Veniam magni debitis possimus ab autem nostrum, blanditiis corrupti et odit eligendi quibusdam consequuntur fugit neque, maxime voluptate.</span>
          </div>
        </div>
        <div>
          <img src="/profile.png" alt="" />
          <div>
            <div>
              <p>username</p>
              <FontAwesomeIcon className={styles.docs__comment__icon} icon={faEllipsis} />
            </div>
            <span>채팅내용 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut cum qui porro quo perferendis deleniti fugiat ea, eligendi dicta sapiente velit soluta illum culpa corrupti iste quis doloribus quia. Sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptatum obcaecati quas. Veniam magni debitis possimus ab autem nostrum, blanditiis corrupti et odit eligendi quibusdam consequuntur fugit neque, maxime voluptate.</span>
          </div>
        </div>

      </div>
    </main>
  )
}
