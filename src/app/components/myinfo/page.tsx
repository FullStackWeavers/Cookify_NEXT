import Image from 'next/image'
import styles from './css/myinfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default function MyInfo() {

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <div className={styles.profileImage}>
            <div className={styles.ImageContainer}>
              <Image src={'/profile.png'} alt='profileImage' width={300} height={300}></Image>
            </div>
          </div>  
          <div className={styles.changePhoto}>
            <button className={styles.button}>
              <FontAwesomeIcon icon={faCamera} className={styles.icon} />
              <span>이미지 변경</span> 
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.box}>
            <p>이름</p>
            <div className={styles.inputButtonBox}>
              <div className={styles.inputBox}>
                <input type="text" placeholder='Enter your New name'/>
              </div>
              <button className={styles.buttonBox}>
                <span>수정</span>
              </button>
            </div>
            <p>이메일</p>
            <div className={styles.inputButtonBox}>
              <div className={styles.inputBox}>
                <input type="text" placeholder='Enter your Email address'/>
              </div>
              <button className={styles.buttonBox}>
                <span>수정</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
