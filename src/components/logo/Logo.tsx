import React from 'react'
import './Logo.scss'

const Logo: React.FC<any> = (props) => {
  return (
    <div className='logo'>
      {
        [1, 2, 3, 4].map((i) => (
          <div key={i} className='logoComponent' style={ { backgroundColor: `var(--color-${i})` } }></div>
        ))
      }
    </div>
  )
}

export default Logo
