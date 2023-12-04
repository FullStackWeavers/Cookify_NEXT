'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faBook, faHeart, faRightFromBracket, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import MyInfo from '../components/myinfo/page'
import MyRecipe from '../components/myrecipe/page'
import MyFollow from '../components/myfollow/page'
import MyLike from '../components/mylike/page'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function MyPage() {
  const [isMyPage, setIsMyPage] = useState("MyInfo")
  const [isUser, setIsUser] = useState({})

  const MyPageClick = (name: string) => {
    setIsMyPage(name);
  }

  const MyPageCheack = () => {
    switch (isMyPage) {
      case 'MyInfo':
        return <MyInfo userData = {isUser}/>;
      case 'MyFollow':
        return <MyFollow />;
      case 'MyRecipe':
        return <MyRecipe />;
      case 'MyLike':
        return <MyLike />;
      default:
        return null;
    }
  }

  useEffect(() => {
    axios.get("http://localhost:8080/api/auth/user",{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,})
  .then(response => {
    setIsUser(response.data)
    console.log(response.data);
  })
  .catch(error => {
    console.error("API 호출 중 오류 발생:", error);
    console.log("Error response:", error.response); // 추가 정보 출력
  });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mypageBar}>
        <Link href={'/'}>
          <h2>Cookify</h2>
        </Link>
        <div className={styles.barMenu1}>
          <button className={isMyPage =="MyInfo" ? styles.onPage : ""} onClick={() => MyPageClick("MyInfo")}><FontAwesomeIcon className={styles.barIcon} icon={faUser} />내 정보</button>
          <button className={isMyPage =="MyFollow" ? styles.onPage : ""} onClick={() => MyPageClick("MyFollow")}><FontAwesomeIcon className={styles.barIcon} icon={faUsers} />팔로워</button>
          <button className={isMyPage =="MyRecipe" ? styles.onPage : ""} onClick={() => MyPageClick("MyRecipe")}><FontAwesomeIcon className={styles.barIcon} icon={faBook} />나의 레시피</button>
          <button className={isMyPage =="MyLike" ? styles.onPage : ""} onClick={() => MyPageClick("MyLike")}><FontAwesomeIcon className={styles.barIcon} icon={faHeart} />좋아요</button>
        </div>
        <div className={styles.barMenu2}>
          <button><FontAwesomeIcon className={styles.barIcon} icon={faRightFromBracket} />로그아웃</button>
        </div>
      </div>
      <div>
        {MyPageCheack()}
      </div>
    </main>
  )
}
