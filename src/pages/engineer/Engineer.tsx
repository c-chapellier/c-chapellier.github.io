import React from 'react'
import './Engineer.scss'

const Engineer: React.FC<any> = () => {
  return (
    <section id='engineer' className='engineer'>
      <div className='engineer-content'>
        <h1>Engineer</h1>

        <div className='h2-wrapper'>
          <h2>Education</h2>
          <p>Henallux - Industrial Engineer Pierrard-Virton, Be. September 2020 - ...</p>
        </div>

        <div className='h2-first-border'>
          <div className='h2-content'>
            <h3>Mathematics, Physics, Electricity, Mecanics</h3>
            <div className='h3-content'>
              <div className='h3-border'>
                <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
              </div>
              <div className='car-SVG'></div>
            </div>

            <h3 className='h3-right'>Industrial process control</h3>
            <div className='h3-border-right'>
              <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
            </div>

            <h3>Thermodynamics and thermal transfers</h3>
            <div className='h3-border'>
              <p>Thermal environments and cycles simulations for dimensionning hardware.</p>
            </div>
          </div>
        </div>

        <h1>---------------------</h1>
      </div>
    </section >
  )
}

export default Engineer
