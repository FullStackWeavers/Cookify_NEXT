'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/chat.css'
import { faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


export default function ChatModal(props: { ChatModalClick: any }) {

    const {ChatModalClick} = props
    const [isUser, setIsUser] = useState<string[]>(['a', 'b'])

    useEffect(() => {

    })

    return (
        <div className='modal'>
            <section className='modal__menu'>
                <button className='small'>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <button className='close' onClick={ChatModalClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </section>
            {/* <section className='modal__user'>
                {isUser.map((user) => {
                    return (
                        <div className='modal__user__chat'>
                            <div className='user__profile'>
                                <img src="./profile.png" alt="" />
                            </div>
                            <div className='user__text'>
                                <p className='user__text__name'>username</p>
                                <p className='user__text__comment'>comment </p>
                            </div>
                        </div>
                    )
                })}
            </section> */}
            <section className='modal__room'>
                <div className='modal__room__user'>
                    <div>
                        <img src="./profile.png" alt="" />
                        <p>username</p>
                    </div>
                    <button>팔로워</button>
                </div>
            </section>
            <section className='modal__chat'>
                <div className='modal__chat__comment'>
                    <div className='modal__chat__profile'>
                        <img src="./profile.png" alt="" />
                    </div>
                    <div className='modal__chat__message'>
                        <p>usernameusername</p>
                        <p className='message'>usercommentusercommentusercommentusercomment</p>
                    </div>
                </div>
            </section>
        </div>
    )
}