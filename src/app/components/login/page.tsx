import styles from './css/page.module.css'

export default function Login() {

  return (
    <div>
      <div className={styles.login}>
        <h1>Login</h1>
        <p className={styles.title}>UserID</p>
        <input type="text" />
        <p className={styles.title}>Password</p>
        <input type="text" />
        <button>Login</button>
        <p>비밀번호 분실</p>
        <p>회원가입</p>
      </div>
      <p className={styles.title__line}>
        <span></span>
        <span className={styles.login__icon_title}>간편로그인</span>
        <span></span>
      </p>
      <section className={styles.login__icon}>
        <button className={styles.login__icon_linebutton}>
          <img src='./img/google-btn.png' alt="" />
        </button>
        <button className={styles.login__icon_button}>
          <img src="./img/naver-btn.png" alt="" />
        </button>
        <button className={styles.login__icon_button}>
          <img src="./img/kakao-btn.png" alt="" />
        </button>
      </section>
    </div>
  )
}
