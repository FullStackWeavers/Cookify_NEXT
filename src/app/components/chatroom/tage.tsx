'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/page.module.css'
import Image from 'next/image'
import { faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function ChatRoom(props: { ChatRoomBtn: any }) {
    const { ChatRoomBtn } = props

    return (
        <div className={styles.chatRoom}>
            <div className={styles.profile}>
                <button className={styles.chatList} onClick={ChatRoomBtn}>
                    <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                </button>
                <div className={styles.profileImage}>
                    <Image src={'/profile.png'} alt={''} width={50} height={50} />
                </div>
                <p>username</p>
                <button>
                    팔로우
                </button>
            </div>
            <div className={styles.commentList}>
                <div className={styles.comment}>
                    <div className={styles.profileImage}>
                        <Image src={'/profile.png'} alt={''} width={50} height={50} />
                    </div>
                    <div className={styles.chatComment}>
                        <h4>username</h4>
                        <div>
                            dmdkdkdkdkdk ddmdkdkdk dkdkddmdkdkd kdkdkddmdkdkd kdkdkddmdkd kdkdkdkd
                        </div>
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.profileImage}>
                        <Image src={'/profile.png'} alt={''} width={50} height={50} />
                    </div>
                    <div className={styles.chatComment}>
                        <h4>username</h4>
                        <div>
                            dmdkdkdkdkdk ddmdkdkdk dkdkddmdkdkd kdkdkddmdkdkd kdkdkddmdkd kdkdkdkd
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.commentInput}>
                <input type="text" />
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
}