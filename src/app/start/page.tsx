"use client";

import styles from "./css/page.module.css";
import Login from "../components/login/page";
import Image from "next/image";

export default function LoginAndSignUp() {
  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <div>
          <Image
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340"
            alt=""
            width={200}
            height={150}
          />
          <h1> Cookify로 새로운맛을 찾아보세요.</h1>
          <p>다양한 레시피를 찾아보세요.</p>
        </div>
      </section>

      <section className={styles.right}>
        <h1 className={styles.title}>Cookify</h1>
        <div className={styles.login}>
          <Login />
        </div>
      </section>
    </main>
  );
}
