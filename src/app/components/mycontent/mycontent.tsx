import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/mycontent.css'
import { faBell, faCartShopping, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import Link from 'next/link';

export default function MyContent() {
  return (
    <div className='container'>
      <Link href="/message">
        <button>
          <FontAwesomeIcon className='icon' icon={faComment} />
        </button>
      </Link>
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
  )
}