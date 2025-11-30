import React from 'react'
import Rt from '../../components/rt/Rt'
import Win95Window from '../../components/win95Window/Win95Window'
import './Developer.scss'

const Developer: React.FC<any> = () => {
  const [isBooting, setIsBooting] = React.useState(true)
  const [selectedWindow, setSelectedWindow] = React.useState('Skills')

  const skills = <div className='skills'>
    <h4>Programming Languages</h4>
      <ol>
        <li><h5>Systems programming: C, Assembly, C++, Rust</h5></li>
        <li><h5>Frontend: JavaScript/TypeScript, HTML/CSS</h5></li>
        <li><h5>Backend: Python, Java, SQL</h5></li>
        <li><h5>Scripting et Data Science: Bash, Python, Octave/Matlab</h5></li>
        <li><h5>Mobile apps: Dart Flutter, Swift</h5></li>
        <li><h5>Pleasure: Haskell ;)</h5></li>
      </ol>

    <h4>Tools</h4>
      <h5>Git, Docker, Databases, Electron, Make</h5>

    <h4>Frameworks</h4>
    <ol>
        <li><h5>Web: React, SpringBoot Java</h5></li>
        <li><h5>Python: FastAPI, Numpy, Pandas, Tensorflow, Matplotlib</h5></li>
      </ol>

    <h4>Operating Systems</h4>
      <h5>MacOS, Linux, Windows</h5>
  </div>

  const windows = [
    {
      title: 'Raytracer',
      menuBarItems: ['Disk', 'View', 'Options'],
      content: <Rt />,
      defaultPosition: { x: 250, y: 300 }
    },
    {
      title: 'Skills',
      menuBarItems: ['Disk', 'View', 'Options'],
      content: skills,
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
              <div className='win95-boot'>
                <img src={require('../../assets/Win95Boot.gif')} alt="windows 95 startup" />
              </div>
            )
          : (
              <>
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
                <div className='dock'>
                  <button>Developer</button>
                </div>
              </>
            )
      }
    </section >
  )
}

export default Developer
