"use client";
import Image from "next/image";
import styles from "../login/css/page.module.css";
import { handleLogin } from "@/app/api/login";

const Login = () => {
  return (
    <div className={styles.login}>
      <button className={styles.loginImg} onClick={handleLogin}>
        <Image
          src={"/img/google-btn.png"}
          alt={"LoginBtnImage"}
          width={40}
          height={40}
          className={styles.Img}
        />
        <span>Sign up with Google</span>
      </button>
    </div>
  );
};

export default Login;
