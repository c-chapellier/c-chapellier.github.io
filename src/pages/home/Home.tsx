import React from 'react'
import './Home.scss'

declare function require (path: string): any

const Home: React.FC<any> = () => {
  // const [displayedLines, setDisplayedLines] = React.useState(0)

  // const handleScroll: any = () => {
  //   setDisplayedLines(window.pageYOffset / 6)
  // }

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const lines = [
    (
      <div key='1' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>#include&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'<stdio>'}</h4>
      </div>
    ),
    (
      <div key='2' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='3' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>#define&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>root</h4>
      </div>
    ),
    (
      <div key='4' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='5' className='codeLine'>
        <h4 style={{ color: 'var(--color-3)' }}>int&nbsp;</h4>
        <h4 style={{ color: 'var(--color-1)' }}>main</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>int&nbsp;</h4>
        <h4>argc;&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>char&nbsp;</h4>
        <h4>{'*argv[])'}</h4>
      </div>
    ),
    (
      <div key='6' className='codeLine'>
        <h4>{'{'}</h4>
      </div>
    ),
    (
      <div key='7' className='codeLine'>
        <h4 style={{ color: 'var(--color-3)' }}>&nbsp;&nbsp;&nbsp;&nbsp;const char&nbsp;</h4>
        <h4>*string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-1)' }}>malloc</h4>
        <h4>{'('}&nbsp;</h4>

        <h4 style={{ color: 'var(--color-3)' }}>sizeof char&nbsp;</h4>
        <h4>{'*);'}</h4>
      </div>
    ),
    (
      <div key='8' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='9' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"Hello World!"'}</h4>
        <h4>;</h4>
      </div>
    ),
    (
      <div key='10' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='11' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;there:</h4>
        <h4 style={{ color: 'var(--color-2)' }}>for&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>const unsigned int&nbsp;</h4>
        <h4>{'i = -1; i < argc; i++)'}</h4>
      </div>
    ),
    (
      <div key='12' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='13' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'\'%d\''}</h4>
        <h4>{', string[i]);'}</h4>
      </div>
    ),
    (
      <div key='14' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++i;</h4>
      </div>
    ),
    (
      <div key='15' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='16' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='17' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4>{'== argv[argc])'}</h4>
      </div>
    ),
    (
      <div key='18' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='19' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'""'}</h4>
        <h4>{'); // doesn\'t work without it'}</h4>
      </div>
    ),
    (
      <div key='20' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;goto&nbsp;</h4>
        <h4>there;</h4>
      </div>
    ),
    (
      <div key='21' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='22' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='23' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"all good\\n"'}</h4>
        <h4>{');'}</h4>
      </div>
    ),
    (
      <div key='24' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='25' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</h4>
        <h4>{'(0);'}</h4>
      </div>
    ),
    (
      <div key='26' className='codeLine'>
        <h4>{'}'}</h4>
      </div>
    )
  ]

  return (
    <section id='home' className='home'>

      <div className='textAndCode'>
        <div className='text'>
          <div className='twoColorDiv'>
            <h1 className='twoColor' style={{ color: 'var(--color-1' }}>Hi!</h1>
          </div>
          <div className='twoColorDiv'>
            <h1>My name is&nbsp;</h1>
            <h1 className='twoColor' style={{ color: 'var(--color-2' }}>Corentin Chapellier</h1>
          </div>
          <div className='twoColorDiv'>
            <h4>I am a&nbsp;</h4>
            <h4 className='twoColor' style={{ color: 'var(--color-3' }}>Software Developer</h4>
          </div>
          <div className='twoColorDiv'>
            <h4>Here is my&nbsp;</h4>
            <h4 className='twoColor' style={{ color: 'var(--color-4' }}>Personal Site</h4>
          </div>
        </div>

        <div className='code'>
          {
            lines.map((line) => (
              line
            ))
          }
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>

        </div>
      </div>

      <img src={require('../../assets/ProfilePicture.jpg')} alt="profile picture" />
    </section>
  )
}

export default Home
