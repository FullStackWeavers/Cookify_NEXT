'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import MyContent from "./components/mycontent/page";
import UserRecipe from "./components/recipe/userrecipe/page";
import DocsRecipe from "./components/recipe/docsrecipe/page";
import SearchRecipe from "./components/recipe/searchrecipe/page";
import { Main } from "./api/main";

export default function Home() {

  const api = Main();

  return (
    <>
      <Header />
      <MyContent />
      <main className={styles.main}>
        <section className={styles.popular_recipes_container}>
            {api.isImg[0].map((value, index) => {
              return (
                <span className={styles.image} key={index} style={{display: api.isImgCount === index ? 'block' : 'none'}}>
                  <Image
                    src={`/main${value}.png`}
                    alt="Profile Image"
                    width={2000}
                    height={550}
                    loading="eager"
                  />
                </span>
              )
            })
            }
        </section>
        <section className={styles.middle_container}>
          <div className={styles.filtered_recipes}>
            {<div className={styles.upContainer}>
              <div className={styles.whenBtn}>
                <button onClick={api.likeTypeUser}>유저 레시피</button>
                <button onClick={api.likeTypeDocs}>기본 레시피</button>
              </div>
              <Link href="/posting">
                <button className={styles.postBtn}>레시피 작성</button>
              </Link>
            </div>}
            {/* <SearchRecipe/> */}
            {api.isRecipeType == "brief" ?<UserRecipe/>:
            <DocsRecipe/>}
          </div>
        </section>
        <section className={styles.last_container}>
          <div className={styles.word}>
            <span>Browse All Recipes</span>
            <div>
              <em>
                Discover a world of delicious recipes with our curated
                selection.
              </em>
              <em>
                Whether you are looking for a quick weeknight dinner or a show-
              </em>
              <em>
                stopping dessert, we have a recipe for every occasion. All our
              </em>
              <em>
                recipes are made with fresh ingredients and easy-to-follow
              </em>
              <em>instructions. Start exploring now!</em>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.card}>
              <Image
                src="/card1.png"
                alt="cardImage"
                width={230}
                height={180}
              />
            </div>
            <div className={styles.card}>
              <Image
                src="/card2.png"
                alt="cardImage"
                width={230}
                height={180}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
