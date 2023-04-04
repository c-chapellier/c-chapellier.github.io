
import React from 'react'
import Car from '../car/Car'
import './HomeEngineerTransition.scss'

const HomeEngineerTransition: React.FC<any> = () => {
  return (
    <section id='home-engineer-transition' className='home-engineer-transition'>
      <div className='spacer-top'></div>
      <div className='transition1'></div>
      <div className='spacer-transition1'></div>
      <div className='transition2'></div>
      <div className='spacer-transition2'></div>
      <div className='transition3'>
        <Car color1='--color-engineer-2' color2='--color-engineer-3' />
      </div>
    </section>
  )
}

export default HomeEngineerTransition
