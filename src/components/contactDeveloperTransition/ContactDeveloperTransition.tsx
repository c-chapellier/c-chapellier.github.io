
import React from 'react'
import Car from '../car/Car'
import './ContactDeveloperTransition.scss'

const ContactDeveloperTransition: React.FC<any> = () => {
  return (
    <section id='ContactDeveloperTransition' className='contactDeveloperTransition'>
      <div className='spacerTop'></div>
      <div className='transition1'></div>
      <div className='spacerTransition1'></div>
      <div className='transition2'></div>
      <div className='spacerTransition2'></div>
      <div className='transition3'>
        <Car color1='--color-engineer-2' color2='--color-engineer-3' />
      </div>
    </section>
  )
}

export default ContactDeveloperTransition
