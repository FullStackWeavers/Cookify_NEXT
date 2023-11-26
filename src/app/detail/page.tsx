import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/detail.module.css'
import { faArrowTurnDown, faEllipsis, faListOl, faMessage, faUtensils } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function Posting() {


  return (
    <main className={styles.main}>
      <section className={styles.photoSection}>
        <div className={styles.photoSection_titleDiv}>
          <span>[요리 이름]</span>
        </div>
        <div className={styles.photoSection_photoDiv}>
          <Image src={'/detail.png'} alt='FootPhoto' width={1000} height={400} layout='responsive'></Image>
        </div>
        <div className={styles.photoSection_userDiv}>
          <div className={styles.userCard}>
            <Image className={styles.userCard_profileImage} src={'/profile.png'} alt='profileImage' width={50} height={50}></Image>
            <span className={styles.userCard_userName}>유저 이름</span>
          </div>
          <div className={styles.followCard}>
            <button className={styles.followBtn}>팔로우</button>
            <div className={styles.heartBtn}>
              <svg className={styles.heartIcon} fill="#ff0000" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <style></style>
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <span className={styles.heartNumber}>15</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ingredientsSection}>
        <div className={styles.ingredientsSection_titleDiv}>
          <FontAwesomeIcon icon={faUtensils} className={styles.Icon}/>
          <span>재료</span>
        </div>
        <div className={styles.ingredientsSection_contentDiv}>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>물(250ml 기준) 2컵</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>돼지고기 찌개용 또는 목살 250g</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>신김치 200g</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>김칫국물 5큰술</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>참기름 1작은술</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>양파 1/2개</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>청고추 2개</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
          <div className={styles.ingredientDiv}>
            <span className={styles.name}>대파 약간</span>
            <button className={styles.buyBtn}>구매</button>
          </div>
        </div>
        <div className={styles.ingredientsSection_buttonDiv}>
          <button>재료 전부 담기</button>
        </div>
      </section>
      <section className={styles.makingNumberSection}>
        <div className={styles.makingNumberSection_titleDiv}>
          <FontAwesomeIcon icon={faListOl} className={styles.icon} />
          <span>조리 순서</span>
        </div>
        <div className={styles.makingNumberSection_NumberCardDiv}>
          <div className={styles.card}>
            <div className={styles.number}>
              <div className={styles.greenBox}>
                <span>1</span>
              </div>
            </div>
            <div className={styles.explain}>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cum totam aliquam debitis maiores perferendis eaque, aspernatur, dolor quo hic, consequuntur doloremque nam animi autem. Quidem sint ab modi quo?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Porro magni nam reiciendis, laudantium, reprehenderit hic sapiente voluptatibus corporis distinctio assumenda molestias vel eos voluptatum, ea dicta? Commodi quisquam iure natus voluptatem error rem a aut accusamus earum vitae.</span>
            </div>
            <div className={styles.photo}>
              <Image src={'/detail.png'} alt='numberPhoto' width={600} height={300}></Image>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>
              <div className={styles.greenBox}>
                <span>2</span>
              </div>
            </div>
            <div className={styles.explain}>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cum totam aliquam debitis maiores perferendis eaque, aspernatur, dolor quo hic, consequuntur doloremque nam animi autem. Quidem sint ab modi quo?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Porro magni nam reiciendis, laudantium, reprehenderit hic sapiente voluptatibus corporis distinctio assumenda molestias vel eos voluptatum, ea dicta? Commodi quisquam iure natus voluptatem error rem a aut accusamus earum vitae.</span>
            </div>
            <div className={styles.photo}>
              <Image src={'/detail.png'} alt='numberPhoto' width={600} height={300}></Image>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>
              <div className={styles.greenBox}>
                <span>3</span>
              </div>
            </div>
            <div className={styles.explain}>
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cum totam aliquam debitis maiores perferendis eaque, aspernatur, dolor quo hic, consequuntur doloremque nam animi autem. Quidem sint ab modi quo?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Magni laborum, mollitia vero sit asperiores consequuntur ab commodi deleniti numquam quaerat harum voluptatem culpa aut, fuga sapiente accusamus fugit veritatis. Autem distinctio quia corrupti officia non molestias fugiat laudantium?
              Porro magni nam reiciendis, laudantium, reprehenderit hic sapiente voluptatibus corporis distinctio assumenda molestias vel eos voluptatum, ea dicta? Commodi quisquam iure natus voluptatem error rem a aut accusamus earum vitae.</span>
            </div>
            <div className={styles.photo}>
              <Image src={'/detail.png'} alt='numberPhoto' width={600} height={300}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.commentsSection}>
        <div className={styles.commentsSection_titleDiv}>
          <FontAwesomeIcon icon={faMessage} className={styles.icon}/>
          <span>댓글</span>
        </div>
        <div className={styles.commentsSection_commentsDiv}>
          <div className={styles.commentsSection_commentDiv}>
            <div className={styles.commentsSection_profileImageDiv}>
              <Image src={'/profile.png'} alt='profileImage' width={50} height={50}></Image>
            </div>
            <div className={styles.commentsSection_middleDiv}>
              <span>User Name</span>
              <div className={styles.commentsSection_middleDiv_content}>
                <span>Text</span>
              </div>
            </div>
            <button className={styles.commentsSction_lastDIv}>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <div className={styles.commentsSection_comment_commentsDiv}>
            <FontAwesomeIcon className={styles.icon} icon={faArrowTurnDown} />
            <div className={styles.commentsSection_comment_commentDiv}>
              <Image src={'/profile.png'} alt='profileImage' width={50} height={50}></Image>
              <div className={styles.commentsSection_middleDiv}>
                <span>User Name</span>
                <div className={styles.commentsSection_middleDiv_content}>
                    <span>Text</span>
                </div>
              </div>
              <button className={styles.commentsSction_lastDIv}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.commentsSection_commetingDiv}>
          <div className={styles.profileImage}>
            <Image src={'/profile.png'} alt='MyProfileImage' width={50} height={50}></Image>
          </div>
          <div className={styles.middleDiv}>
            <input type="text" placeholder='여기에 댓글을 입력하세요.'/>
          </div>
          <div className={styles.lastDiv}>
            <button>댓글 달기</button>
          </div>
        </div>
      </section>
    </main>
  )
}
