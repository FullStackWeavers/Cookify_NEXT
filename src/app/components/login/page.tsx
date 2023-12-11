"use client";
import Image from "next/image";
import styles from "../login/css/page.module.css";
import { handleLogin } from "@/app/api/login";

const Login = () => {
  return (
    <div className={styles.login}>
      <button className={styles.loginImg} onClick={handleLogin}>
        <Image
          src={"/img/web_light_rd_SU@2x.png"}
          alt={""}
          width={200}
          height={50}
        />
      </button>
    </div>
  );
};

export default Login;
