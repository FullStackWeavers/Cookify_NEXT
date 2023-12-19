import Image from "next/image";
import styles from "./css/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import UserRecipeApi from "@/app/api/userrecipe";

export default function UserRecipe() {
  const api = UserRecipeApi();
  
  return (
    <div
      className={styles.downContainer}
      ref={api.downContainerRef}
      onScroll={api.handleScroll}
    >
      {api.isRecipe.map((value, index) => {
        return (
          <div className={styles.docs_card} key={index}>
            <Link href={`/detail/brief/${value.recipeId}`}>
              <Image
                src={value.thumbnail}
                alt="Docs Image"
                width={200}
                height={150}
              />
              <span className={styles.docs_card_name}>
                {value.title}
              </span>
            </Link>
            <div className={styles.likeBtnBox}>
              <button
                className={styles.likeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  api.likeBtn(value.recipeId, index);
                }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={styles.icon}
                />
                <span>{api.isRecipe[index].like}</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
