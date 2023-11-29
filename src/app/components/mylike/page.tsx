'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Image from 'next/image'


export default function MyLike() {

  const [isCount, setIsCount] = useState(15)

  return (
    <div className={styles.mylike}>
      <div className={styles.recipe}>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
        <div>
          <Image src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTdfOTcg%2FMDAxNjc5MDUzNDIwMDAy.QFhnImkgKNqV0ra02lZK4fC8eegTB3H3dSsJNLGeLzog.Rgooqg8IfOA6TLvOExpuPZaf9C4z-HWfIFHJ-Lh8OnUg.PNG.xowldodls1%2Fimage.png&type=a340" alt="" width={275} height={200} />
          <p>recipe name</p>
          <button>
            <FontAwesomeIcon icon={faHeart} />
            <span>{isCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
