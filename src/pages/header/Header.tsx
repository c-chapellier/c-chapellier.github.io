import React from 'react'
import NavButton from '../../components/navButton/NavButton'
import './Header.scss'

const Header: React.FC<any> = () => {
  const menus = [
    'Developer',
    'Engineer',
    'Other',
    'Contact'
  ]

  return (
    <header>
      <div className='logo'>
        {
          [1, 2, 3, 4].map((i) => (
            <div key={i} className='logoComponent' style={ { backgroundColor: `var(--color-${i})` } }></div>
          ))
        }
      </div>

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
