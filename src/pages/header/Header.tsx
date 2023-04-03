import React from 'react'
import Logo from '../../components/logo/Logo'
import NavButton from '../../components/navButton/NavButton'
import { menus } from '../../utils/constants'
import './Header.scss'

const Header: React.FC<any> = () => {
  return (
    <header>
      <Logo />

      <div className='links'>
        {
          menus.map((text, index) => (
            <NavButton key={index} index={index} text={text} />
          ))
        }
      </div>
    </header>
  )
}

export default Header
