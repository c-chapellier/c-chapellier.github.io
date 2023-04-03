import React from 'react'
import Logo from '../../components/logo/Logo'
import NavButton from '../../components/navButton/NavButton'
import { menus } from '../../utils/constants'
import './Footer.scss'

const Footer: React.FC<any> = () => {
  return (
    <footer>
      <Logo />

      <div className='links'>
        {
          menus.map((text, index) => (
            <NavButton key={index} index={index} text={text} />
          ))
        }
      </div>

      <div>All rights non reserved</div>

      <Logo />
    </footer>
  )
}

export default Footer
