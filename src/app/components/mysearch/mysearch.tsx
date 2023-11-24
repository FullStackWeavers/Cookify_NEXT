'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/mysearch.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function MySearch() {

  const [isHidden, setIsHidden] = useState(true)
  const currentPath = usePathname();

  useEffect(() => {
    if (currentPath == "/mypage") {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  }, [])

  return isHidden ? (
    <div >
      <section className='search'>
        <div>
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
          <input type="text" />
        </div>
      </section>
    </div>
  ) : null;
}