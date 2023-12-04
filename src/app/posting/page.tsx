'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faFileArrowUp, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

export default function Posting() {

  const [isTitle, setIsTitle] = useState("");
  const [isTitleValue, setIsTitleValue] = useState("")
  const [isImage, setIsImage] = useState("");
  const [isSteps, setIsSteps] = useState("");
  const [isIngredients1, setIsIngredients1] = useState("");
  const [isIngredients2, setIsIngredients2] = useState("");
  const [isIngredients, setIsIngredients] = useState(false);
  const [isIngredientName1, setIsIngredientName1] = useState("")
  const [isIngredientWeight1, setIsIngredientWeight1] = useState("")
  const [isIngredientName2, setIsIngredientName2] = useState("")
  const [isIngredientWeight2, setIsIngredientWeight2] = useState("")
  const [isIngredientsList1, setIsIngredientsList1] = useState<string[]>([])
  const [isRecipe, setIsRecipe] = useState([])
  const [isUser, setIsUser] = useState({ email: "", name: "", picture: "" })



  const recipeTitle = () => {

    setIsTitle(isTitleValue)
  }

  const recipeTitleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setIsTitleValue(e.target.value)
  }

  const recipeImage = () => {

  }

  const recipeIngredients1 = () => {
    const data = isIngredients1 + "," + isIngredientName1 + " " + isIngredientWeight1
    setIsIngredients1(data)
    ingredientsList1(data);
  }
  const ingredientName1 = (e: { target: { value: any } }) => {
    setIsIngredientName1(e.target.value)
  }
  const ingredientWeight1 = (e: { target: { value: any } }) => {
    setIsIngredientWeight1(e.target.value)
  }
  const ingredientsList1 = (data: string) => {
    setIsIngredientsList1(data.split(","));
  }
  const ingredientsDelete1 = (index: number) => {
    isIngredientsList1[index]
  }

  const recipeIngredients2 = () => {

  }

  const recipeSteps = () => {

  }
  const ingredientsBtn = () => {
    setIsIngredients(!isIngredients)
    if (isIngredients == true) {
      setIsIngredients2("")
    }
  }

  const setReicpe = () => {

  }

  const recipeCreate = () => {
    const data = { title: "test", ingredients: ["test1", "test1"], ingredients2: ["test2", "test2"], steps: ["test3", "test3"], thumbnail: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" }
    axios.post('http://localhost:8080/recipe', {
      title: "test",
      ingredients: ["test1", "test1"],
      ingredients2: ["test2", "test2"],
      steps: ["test3", "test3"],
      thumbnail: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340"
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("에러 응답:", error.response);
      });
  }
  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/user", {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then(function (response) {
        setIsUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("에러 응답:", error.response);
      });
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.posting__title}>
        <p>
          {!isTitle ? <input type="text" onChange={recipeTitleInput} /> : isTitle}
          <button onClick={recipeTitle}>{!isTitle ? "저장" : "수정"}</button>
        </p>
        {isImage.length == 0 ? <div className={styles.iconBox}><FontAwesomeIcon className={styles.icon} icon={faFileArrowUp} /></div> : <Image src="" alt="" />}
        <div>
          <span>
            <Image src={isUser.picture} alt="" width={50} height={50} />
            <p>{isUser.name}</p>
          </span>
          <button className={styles.posting__image}>
            <span className='icon'>
              <FontAwesomeIcon icon={faFileArrowUp} />
            </span>
            <span className='explain'>
              대표 이미지 업로드
            </span>
          </button>
        </div>
      </div>

      <div className={styles.posting__ingredient}>
        <h1>
          <FontAwesomeIcon className={styles.icon} icon={faUtensils} />
          <span>재료</span>
        </h1>
        <div className={styles.posting__ingredient__list}>
          <div className={styles.posting__ingredient__item}>
            <div>
              <h2>[재료]</h2>
              {!isIngredients ? <button onClick={ingredientsBtn}>부재료 추가</button> : null}
            </div>
            <div>
              <input type="text" placeholder='재료 이름' onChange={ingredientName1} />
              <input type="text" placeholder='수량' onChange={ingredientWeight1} />
              <button onClick={recipeIngredients1}>재료추가</button>
            </div>
            {isIngredientsList1.map((ingredient, index) => {

              return ingredient.length > 0 ? (
                // eslint-disable-next-line react/jsx-key
                <div>
                  <li>
                    <ul>
                      <p>{ingredient}</p>
                    </ul>
                  </li>
                  <button onClick={e => { ingredientsDelete1(index) }}>삭제</button>
                </div>
              ) : null
            })
            }
          </div>
          {!isIngredients ? null : <div className={styles.posting__ingredient__item}>
            <div>
              <h2>[부재료]</h2>
              {!isIngredients ? null : <button onClick={ingredientsBtn}>부재료 제거</button>}
            </div>
            <div>
              <input type="text" placeholder='재료 이름' />
              <input type="text" placeholder='수량' />
              <button onClick={recipeIngredients1}>재료추가</button>
            </div>
            {isIngredients2 ?<div>
              <li>
                <ul>
                  <p>{isIngredients2}</p>
                </ul>
              </li>
              <button>수정</button>
              <button>추가</button>
            </div>:null}
          </div>}
        </div>

        <button className={styles.mycart__button}>
          구매
        </button>
      </div>

      <div className={styles.posting__ricipe}>
        <div className={styles.posting__ricipe__title}>
          <h1>
            <FontAwesomeIcon className={styles.icon} icon={faUtensils} />
            <span>조리순서</span>
          </h1>
          <button>추가</button>
        </div>

        <div className={styles.posting__ricipe__list}>
          <li>
            <ul>
              <div>
                <p>1</p>
              </div>
              <input type="textarea" className={styles.posting__ricipe__comment} />
            </ul>
          </li>
        </div>
        <button onClick={recipeCreate}>저장</button>
      </div>
    </main>
  )
}
