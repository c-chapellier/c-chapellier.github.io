import React from 'react'
import Logo from '../../components/logo/Logo'
import NavButton from '../../components/navButton/NavButton'
import { menus } from '../../constants/constants'
import './Header.scss'

const Header: React.FC<any> = () => {
  return (
    <header>
      <Logo className='logo' />

      <div className='links'>
        {
          menus.map((menu, index) => (
            <NavButton key={index} index={index} menu={menu} />
          ))
        }
      </div>
    </header>
  )
}

export default Header
