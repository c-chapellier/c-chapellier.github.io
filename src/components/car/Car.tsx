
import React from 'react'
import './Car.scss'

interface CarProps {
  color1: string
  color2: string
}

const Car: React.FC<CarProps> = (props) => {
  const { color1, color2 } = props

  return (
    <section id='car' className='car'
      style={{
        ['--color-car-1' as any]: `var(${color1})`,
        ['--color-car-2' as any]: `var(${color2})`
      }}
    >
      <div className="rect"></div>
      <div className="front">
        <div className="window"></div>
        <div className="f_hood"></div>
      </div>
      <div className="tyres"></div>
      <div className="f_tyres"></div>
      <div className="hood"></div>
    </section>
  )
}

export default Car
