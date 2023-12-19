import Image from "next/image";
import styles from "./css/page.module.css";
import Link from "next/link";
import SearchRecipeApi from "@/app/api/searchrecipe";

export default function SearchRecipe() {
  
  const api = SearchRecipeApi();
  
  return (
    <div
      className={styles.downContainer}
      ref={api.downContainerRef}
      onScroll={api.handleScroll}
    >
      {
        api.isRecipe.map((value, index) => (
          <div className={styles.docs_card} key={index}>
            <Link href={value.recipeId == null ? `/detail/recipe_docs/${value.recipeDocsId}` : `/detail/recipe/${value.recipeDocsId}`}>
              <Image
                src={value.recipeThumbnail}
                alt="Docs Image"
                width={200}
                height={150}
              />
              <span className={styles.docs_card_name}>
                {value.recipeTitle}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
}
