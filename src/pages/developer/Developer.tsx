import React from 'react'
import './Developer.scss'
import Rt from '../../components/rt/Rt'
import Win95Window from '../../components/win95Window/Win95Window'

const Developer: React.FC<any> = () => {
  const [isBooting, setIsBooting] = React.useState(true)
  const [selectedWindow, setSelectedWindow] = React.useState('Raytracer')

  const windows = [
    {
      title: 'Raytracer',
      menuBarItems: ['Disk', 'View', 'Options'],
      content: <Rt />,
      defaultPosition: { x: 10, y: 10 }
    },
    {
      title: 'Education',
      menuBarItems: ['Disk', 'View', 'Options'],
      content: <Rt />,
      defaultPosition: { x: 40, y: 60 }
    }
  ]

  React.useEffect(() => {
    setTimeout(() => setIsBooting(false), 3000)
  }, [])

  const onSelected = (title: string): void => {
    setSelectedWindow(title)
  }

  return (
    <section id='developer' className='developer'>
      {
        isBooting
          ? (
              <div className='win95Boot'>
                <img src={require('../../assets/Win95Boot.gif')} alt="windows 95 startup" />
              </div>
            )
          : (
              <>
                {
                  windows.map((window, index) => (
                    <Win95Window
                      key={index}
                      {...window}
                      selected={window.title === selectedWindow}
                      onSelected={onSelected}
                    />
                  ))
                }
              </>
            )
      }
    </section >
  )
}

export default Developer
