'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/header.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Header() {

  const [isFindShow, setIsFindShow] = useState(true)

  const ClickBtn = () => {
    if (isFindShow === true) {
      setIsFindShow(false)
    } else {
      setIsFindShow(true)
    }
  }

  useEffect(() => {
    setIsFindShow(true)
  },[])

  return (
    <header >
      <section className='left'>
        <p>Cookify</p>
      </section>
      <section className='right'>
        {isFindShow && <input type="text" placeholder='Search recipes' />}
        <button
          onClick={ClickBtn}
        >
          <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
        </button>
      </section>
    </header>
  )
}