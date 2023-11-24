// 'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faBook, faGear, faHeart, faRightFromBracket, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import MyRecipe from '../components/myrecipe/page'

export default function MyPage() {

  

  return (
    <main className={styles.main}>
      <div className={styles.mypage__bar}>
        <h2>Cookify</h2>
        <div className={styles.mypage__bar__menu}>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faUser} />내 정보</p>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faUsers} />팔로워</p>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faBook} />나의 레시피</p>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faHeart} />좋아요</p>
        </div>
        <div className={styles.mypage__bar__logout}>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faGear} />설정</p>
          <p><FontAwesomeIcon className={styles.mypage__bar__icon} icon={faRightFromBracket} />로그아웃</p>
        </div>
      </div>
      <div>
        <MyRecipe/>
      </div>
    </main>
  )
}
