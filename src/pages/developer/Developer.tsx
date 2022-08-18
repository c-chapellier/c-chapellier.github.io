import React from 'react'
import './Developer.scss'

const Developer: React.FC<any> = () => {
  const image = ''

  return (
    <section id='developer' className='developer'>
        <img src={`data:image/bmp;base64,${image}`} />
    </section >
  )
}

export default Developer
