'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const image_link = '/popular_recipes_image.png'

  const [isRecipeTypeOpen, setIsRecipeTypeOpen] = useState(false)
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false)
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false)
  const [isRecipeSourceOpen, setIsRecipeSourceOpen] = useState(false)

  const clickRecipeTypeBtn = () => {
    if (isRecipeTypeOpen === false) {
      setIsRecipeTypeOpen(true)
    } else {
      setIsRecipeTypeOpen(false)
    }
  }
  const clickIngredientsBtn = () => {
    if (isIngredientsOpen === false) {
      setIsIngredientsOpen(true)
    } else {
      setIsIngredientsOpen(false)
    }
  }
  const clickDifficultyBtn = () => {
    if (isDifficultyOpen === false) {
      setIsDifficultyOpen(true)
    } else {
      setIsDifficultyOpen(false)
    }
  }
  const clickRecipeSourceBtn = () => {
    if (isRecipeSourceOpen === false) {
      setIsRecipeSourceOpen(true)
    } else {
      setIsRecipeSourceOpen(false)
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.popular_recipes_container}>
        <Image className={styles.image} src={image_link} alt="Profile Image" width={2000} height={600} />
      </section>
      <section className={styles.middle_container}>
        <div className={styles.filter_recipes}>
          <h2 className={styles.filter_recipes_title}>Filter Recipes</h2>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3 >Recipe type</h3>
              <button
                onClick={clickRecipeTypeBtn}
              >
                {!isRecipeTypeOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isRecipeTypeOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isRecipeTypeOpen && <ul className={styles.content_list}>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항1
              </li>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항2
              </li>
            </ul>}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3 >Ingredients</h3>
              <button
                onClick={clickIngredientsBtn}
              >
                {!isIngredientsOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isIngredientsOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isIngredientsOpen && <ul className={styles.content_list}>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항1
              </li>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항2
              </li>
            </ul>}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3 >Difficulty</h3>
              <button
                onClick={clickDifficultyBtn}
              >
                {!isDifficultyOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isDifficultyOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isDifficultyOpen && <ul className={styles.content_list}>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항1
              </li>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항2
              </li>
            </ul>}
          </div>
          <div className={styles.content}>
            <div className={styles.content_title}>
              <h3 >Recipe Source</h3>
              <button
                onClick={clickRecipeSourceBtn}
              >
                {!isRecipeSourceOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isRecipeSourceOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </button>
            </div>
            {isRecipeSourceOpen && <ul className={styles.content_list}>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항1
              </li>
              <li>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                선택사항2
              </li>
            </ul>}
          </div>
        </div>
        <div className={styles.filtered_recipes}>
          <div className={styles.upContainer}>
            <div className={styles.whenBtn}>
              <button>아침</button>
              <button>점심</button>
              <button>저녁</button>
              <button>디저트</button>
            </div>
            <button className={styles.postBtn}>
              <Link href="/posting">
                레시피 작성
              </Link>
            </button>
          </div>
          <div className={styles.downContainer}>

          </div>
        </div>
      </section>
      <section className={styles.last_container}>
      </section>
    </main>
  )
}
