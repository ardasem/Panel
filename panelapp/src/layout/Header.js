import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='bg-slate-700 p-[12px] w-screen '>
      <div>

      <Link className='flex flex-row items-center gap-[10px]' to='/'>
      <FontAwesomeIcon icon={faReceipt} color='white'/>
      <p className='text-[26px] text-white hover:text-slate-500 font-bold font-montserrat'>Tag-e</p>
      </Link>
      </div>
    </div>
  )
}

export default Header