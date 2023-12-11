/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import styles from "./css/page.module.css";
import myRecipe from "@/app/api/myrecipe";

export default function MyRecipe() {
  const api = myRecipe();

  return (
    <div className={styles.mypage__component}>
      <h3>나의 레시피</h3>
      <div className={styles.mypage__component__recipe}>
        {api.isMyRecipe.map((value, index) => {
          return (
            <div key={index}>
              <Image src={value.thumbnail} alt="" width={250} height={200} />
              <p>{value.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
