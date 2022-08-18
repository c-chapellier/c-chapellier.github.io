import React from 'react'
import './Developer.scss'

const Developer: React.FC<any> = () => {
  return (
    <section id='developer' className='developer'>
      <div className='developerContent'>
        <h1>Engineer</h1>

        <div className='h2Wrapper'>
          <h2>Education</h2>
          <p>Henallux - Industrial Engineer Pierrard-Virton, Be. September 2020 - ...</p>
        </div>

        <div className='h2FirstBorder'>
          <div className='h2Content'>
            <h3>Mathematics, Physics, Electricity, Mecanics</h3>
            <div className='h3Content'>
              <div className='h3Border'>
                <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
              </div>
              <div className='carSVG'></div>
            </div>

            <h3 className='h3Right'>Industrial process control</h3>
            <div className='h3BorderRight'>
              <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
            </div>

            <h3>Thermodynamics and thermal transfers</h3>
            <div className='h3Border'>
              <p>Thermal environments and cycles simulations for dimensionning hardware.</p>
            </div>
          </div>
        </div>

        <div className='h2Wrapper'>
          <h2>Education</h2>
          <p>Henallux - Industrial Engineer Pierrard-Virton, Be. September 2020 - ...</p>
        </div>

        <div className='h2FirstBorder'>
          <div className='h2Content'>
            <h3>Mathematics, Physics, Electricity, Mecanics</h3>
            <div className='h3Content'>
              <div className='h3Border'>
                <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
              </div>
              <div className='carSVG'></div>
            </div>

            <h3 className='h3Right'>Industrial process control</h3>
            <div className='h3BorderRight'>
              <p>Implementing programms on programmable logic controllers for automating supply chains.</p>
            </div>

            <h3>Thermodynamics and thermal transfers</h3>
            <div className='h3Border'>
              <p>Thermal environments and cycles simulations for dimensionning hardware.</p>
            </div>
          </div>
        </div>

        <h1>---------------------</h1>
      </div>
    </section >
  )
}

export default Developer
