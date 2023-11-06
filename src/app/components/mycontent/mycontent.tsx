import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/mycontent.css'
import { faBell, faCartShopping, faComment } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

export default function MyContent() {
  return (
    <div className='container'>
      <button>
        <FontAwesomeIcon className='icon' icon={faComment} />
      </button>
      <button>
        <FontAwesomeIcon className='icon' icon={faBell} />
      </button>
      <button>
        <FontAwesomeIcon className='icon' icon={faCartShopping} />
      </button>
      <div className='profile'>
        <Image className='icon' src="/profile.png" alt="Profile Image" width={50} height={50} />
      </div>
    </div>
  )
}