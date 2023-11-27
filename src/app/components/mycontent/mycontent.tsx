'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/mycontent.css'
import { faBell, faCartShopping, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MyContent() {
  const [isHidden, setIsHidden] = useState(true)
  const currentPath = usePathname();
  const [isChat, setIsChat] = useState(true)

  const ChatModalClick= () => {
    setIsChat(!isChat)
  }

  useEffect(() => {
    if(currentPath == "/start"){
      setIsHidden(false)
    }else{
      setIsHidden(true)
    }
  },[])

  return isHidden? (
    <div className='container'>
        <button onClick={ChatModalClick}>
          <FontAwesomeIcon className='icon' icon={faComment} />
        </button>
      <Link href="/alarm">
        <button>
          <FontAwesomeIcon className='icon' icon={faBell} />
        </button>
      </Link>
      <Link href="/mycart">
        <button>
          <FontAwesomeIcon className='icon' icon={faCartShopping} />
        </button>
      </Link>
      <Link href="/mypage">
        <div className='profile'>
          <Image className='icon' src="/profile.png" alt="Profile Image" width={50} height={50} />
        </div>
      </Link>
    </div>
  ):null
}