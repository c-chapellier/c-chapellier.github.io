import React from 'react'
import Logo from '../../components/logo/Logo'
import NavButton from '../../components/navButton/NavButton'
import './Footer.scss'

const Footer: React.FC<any> = () => {
  const menus = [
    'Developer',
    'Engineer',
    'Other',
    'Contact'
  ]

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
