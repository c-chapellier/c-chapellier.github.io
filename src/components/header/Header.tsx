import React from 'react'
import './Header.scss'

const Header: React.FC<any> = () => {
  return (
    <header>
      <div className='logo'>
        <div className='logoComponent' style={ { backgroundColor: 'var(--color-1' } }></div>
        <div className='logoComponent' style={ { backgroundColor: 'var(--color-2' } }></div>
        <div className='logoComponent' style={ { backgroundColor: 'var(--color-3' } }></div>
        <div className='logoComponent' style={ { backgroundColor: 'var(--color-4' } }></div>
      </div>

      <div className='links'>
        <h3 style={ { color: 'var(--color-1' } }>Developer</h3>
        <h3 style={ { color: 'var(--color-2' } }>Engineer</h3>
        <h3 style={ { color: 'var(--color-3' } }>Other</h3>
        <h3 style={ { color: 'var(--color-4' } }>Contact</h3>
      </div>
    </header>
  )
}

export default Header
