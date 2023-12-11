"use client";
import Image from "next/image";
import styles from "./css/myinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import myInfo from "@/app/api/myinfo";

export default function MyInfo() {
  const api = myInfo();

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <div className={styles.profileImage}>
            <div className={styles.ImageContainer}>
              <Image
                src={api.isUser.picture}
                alt="profileImage"
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.changePhoto}>
            {api.isBtn ? (
              <button className={styles.button} onClick={api.imageUpload}>
                <FontAwesomeIcon icon={faCamera} className={styles.icon} />
                <span>이미지 수정</span>
              </button>
            ) : (
              ""
            )}
            <input
              type="file"
              accept="image/*"
              ref={api.fileInputRef}
              style={{ display: "none" }}
              onChange={api.handleImageChange}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p>이메일</p>
            <div className={styles.inputButtonBox}>
              <div>
                <p>{api.isUser.email}</p>
              </div>
            </div>
            <p>이름</p>
            <div className={styles.inputButtonBox}>
              <div className={api.isBtn ? styles.inputBox : ""}>
                {api.isBtn ? (
                  <input
                    type="text"
                    placeholder={api.isUser.name}
                    onChange={(e) => api.changeName(e)}
                  />
                ) : (
                  <p>{api.isUser.name}</p>
                )}
              </div>
            </div>
          </div>
          <button onClick={api.changeUser}>
            {api.isBtn ? "저장" : "수정"}
          </button>
        </div>
      </div>
    </div>
  );
}
