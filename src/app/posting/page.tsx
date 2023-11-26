import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faFileArrowUp, faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons'

export default function Posting() {


  return (
    <main className={styles.main}>
      <div className={styles.posting__title}>
        <p>제목</p>
        <img src="" alt="" />
        <div>
          <span>
            <img src="/profile.png" alt="" />
            <p>user name</p>
          </span>
          <button className={styles.posting__image}>
            <span className='icon'>
              <FontAwesomeIcon  icon={faFileArrowUp} />
            </span>
            <span className='explain'>
              대표 이미지 업로드
            </span>
          </button>
        </div>
      </div>

      <div className={styles.posting__ingredient}>
        <h1>
          <FontAwesomeIcon icon={faUtensils} />
          <span>재료</span>
        </h1>
        <div className={styles.posting__ingredient__list}>
          <div className={styles.posting__ingredient__item}>
            <div>
              <h2>[재료]</h2>
              <button>저장/수정</button>
            </div>
            <div>
              <input type="text" placeholder='재료 이름'/>
              <input type="text" placeholder='수량'/>
              <button>재료추가</button>
            </div>
            <div>
              <li>
                <ul>
                  <p>돼지고기 500g</p>
                </ul>
              </li>
              <button>수정</button>
              <button>추가</button>
            </div>
          </div>
        </div>

        <button className={styles.mycart__button}>
          구매
        </button>
      </div>

      <div className={styles.posting__ricipe}>
        <div className={styles.posting__ricipe__title}>
          <h1>
            <FontAwesomeIcon icon={faUtensils} />
            <span>조리순서</span>
          </h1>
          <button>추가</button>
        </div>

        <div className={styles.posting__ricipe__list}>
          <li>
            <ul>
              <div>
                <p>1</p>
              </div>
              <input type="textarea" className={styles.posting__ricipe__comment} />
            </ul>
          </li>
        </div>
        <button>저장</button>
      </div>
    </main>
  )
}
