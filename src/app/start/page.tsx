import styles from "./css/page.module.css";
import Login from "../components/login/page";
import Image from "next/image";
import Link from 'next/link';

export default function LoginAndSignUp() {
  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <div className={styles.titleDiv}>
          <Link href="/">
            <h1 className={styles.title}>Cookify</h1>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.imgDiv}>
            <Image
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340"
              alt=""
              width={400}
              height={250}
            />
          </div>
          <h1> Cookify로 새로운 맛을 찾아보세요.</h1>
          <p>다양한 레시피를 찾아보세요.</p>
        </div>
      </section>

      <section className={styles.right}>
        <div className={styles.login}>
          <Login />
        </div>
      </section>
    </main>
  );
}
