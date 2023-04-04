import React from 'react'
import './Home.scss'

// declare function require (path: string): any

const Home: React.FC<any> = () => {
  const [displayedLines, setDisplayedLines] = React.useState(0)

  const handleScroll: any = () => {
    if (window.pageYOffset < 60) {
      setDisplayedLines(0)
      console.log(window.pageYOffset, 0)
      return
    }
    setDisplayedLines((window.pageYOffset - 60) / 10)
    console.log(window.pageYOffset, (window.pageYOffset - 60) / 10)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const lines = [
    (
      <div key='code-line1' className='code-line'>
        <h4 style={{ color: 'var(--color-2)' }}>#include&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'<stdio>'}</h4>
      </div>
    ),
    (
      <div key='code-line2' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line3' className='code-line'>
        <h4 style={{ color: 'var(--color-2)' }}>#define&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>root</h4>
      </div>
    ),
    (
      <div key='code-line4' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line5' className='code-line'>
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
      <div key='code-line6' className='code-line'>
        <h4>{'{'}</h4>
      </div>
    ),
    (
      <div key='code-line7' className='code-line'>
        <h4 style={{ color: 'var(--color-3)' }}>&nbsp;&nbsp;&nbsp;&nbsp;const char&nbsp;</h4>
        <h4>*string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-1)' }}>malloc</h4>
        <h4>{'('}&nbsp;</h4>

        <h4 style={{ color: 'var(--color-3)' }}>sizeof char&nbsp;</h4>
        <h4>{'*);'}</h4>
      </div>
    ),
    (
      <div key='code-line8' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line9' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"Hello World!"'}</h4>
        <h4>;</h4>
      </div>
    ),
    (
      <div key='code-line10' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line11' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;there:</h4>
        <h4 style={{ color: 'var(--color-2)' }}>for&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>const unsigned int&nbsp;</h4>
        <h4>{'i = -1; i < argc; i++)'}</h4>
      </div>
    ),
    (
      <div key='code-line12' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='code-line13' className='code-line'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'\'%d\''}</h4>
        <h4>{', string[i]);'}</h4>
      </div>
    ),
    (
      <div key='code-line14' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++i;</h4>
      </div>
    ),
    (
      <div key='code-line15' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='code-line16' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line17' className='code-line'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4>{'== argv[argc])'}</h4>
      </div>
    ),
    (
      <div key='code-line18' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='code-line19' className='code-line'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'""'}</h4>
        <h4>{'); // doesn\'t work without it'}</h4>
      </div>
    ),
    (
      <div key='code-line20' className='code-line'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;goto&nbsp;</h4>
        <h4>there;</h4>
      </div>
    ),
    (
      <div key='code-line21' className='code-line'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='code-line22' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line23' className='code-line'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"all good\\n"'}</h4>
        <h4>{');'}</h4>
      </div>
    ),
    (
      <div key='code-line24' className='code-line'>&nbsp;</div>
    ),
    (
      <div key='code-line25' className='code-line'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</h4>
        <h4>{'(0);'}</h4>
      </div>
    ),
    (
      <div key='code-line26' className='code-line'>
        <h4>{'}'}</h4>
      </div>
    )
  ]

  return (
    <section id='home'>
      <div className='home'>
        <div className='text-and-code'>
          <div className='text'>
            <div className='text-line'>
              <h1 style={{ color: 'var(--color-1)' }}>Hi!</h1>
            </div>
            <div className='text-line'>
              <h1>My name is&nbsp;</h1>
              <h1 style={{ color: 'var(--color-2)' }}>Corentin Chapellier</h1>
            </div>
            <div className='text-line'>
              <h4>I am a&nbsp;</h4>
              <h4 style={{ color: 'var(--color-3)' }}>Software Developer</h4>
            </div>
            <div className='text-line'>
              <h4>Here is my&nbsp;</h4>
              <h4 style={{ color: 'var(--color-4)' }}>Personal Site</h4>
            </div>
          </div>

          <div className='code'>
            {
              lines.map((line, index) => index < displayedLines
                ? line
                : <div key={`space${index}`} className='code-line'>&nbsp;</div>
              )
            }
          </div>
        </div>

        <div className='profile-picture-wrapper-wrapper'>
          <div className='spacer-top'></div>
          <div className='profile-picture-wrapper'>
            <div className='profile-picture-background' />
            <img className='profile-picture' src={require('../../assets/ProfilePicture.jpg')} alt='profile picture' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
