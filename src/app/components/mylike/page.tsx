import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./css/page.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import myLike from "@/app/api/mylike";

export default function MyLike() {
  const api = myLike();

  return (
    <div className={styles.mylike}>
      <div className={styles.recipe}>
        {api.isLikeRecipe.map((value, index) => {
          return (
            <div key={index}>
              <Image src={value.thumbnail} alt="" width={275} height={200} />
              <p>{value.title}</p>
              <button>
                <FontAwesomeIcon icon={faHeart} />
                <span>{api.isCount}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
