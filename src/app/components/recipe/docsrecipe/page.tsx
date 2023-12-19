import Image from "next/image";
import styles from "./css/page.module.css";
import Link from "next/link";
import DocsRecipeApi from "@/app/api/docsrecipe";


export default function DocsRecipe() {

  const api = DocsRecipeApi();

  return (
    <div
      className={styles.downContainer}
      ref={api.downContainerRef}
      onScroll={api.handleScroll}
    >
      {api.isRecipe.map((value, index) => {
        return (
          <div className={styles.docs_card} key={index}>
            <Link href={`/detail/recipe_docs/${value.recipeId}`}>
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
          </div>
        );
      })}
    </div>
  );
}
