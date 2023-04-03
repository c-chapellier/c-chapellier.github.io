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
      <div key='codeLine1' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>#include&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'<stdio>'}</h4>
      </div>
    ),
    (
      <div key='codeLine2' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine3' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>#define&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4 style={{ color: 'var(--color-3)' }}>root</h4>
      </div>
    ),
    (
      <div key='codeLine4' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine5' className='codeLine'>
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
      <div key='codeLine6' className='codeLine'>
        <h4>{'{'}</h4>
      </div>
    ),
    (
      <div key='codeLine7' className='codeLine'>
        <h4 style={{ color: 'var(--color-3)' }}>&nbsp;&nbsp;&nbsp;&nbsp;const char&nbsp;</h4>
        <h4>*string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-1)' }}>malloc</h4>
        <h4>{'('}&nbsp;</h4>

        <h4 style={{ color: 'var(--color-3)' }}>sizeof char&nbsp;</h4>
        <h4>{'*);'}</h4>
      </div>
    ),
    (
      <div key='codeLine8' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine9' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;string =&nbsp;</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"Hello World!"'}</h4>
        <h4>;</h4>
      </div>
    ),
    (
      <div key='codeLine10' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine11' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;there:</h4>
        <h4 style={{ color: 'var(--color-2)' }}>for&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>const unsigned int&nbsp;</h4>
        <h4>{'i = -1; i < argc; i++)'}</h4>
      </div>
    ),
    (
      <div key='codeLine12' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='codeLine13' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'\'%d\''}</h4>
        <h4>{', string[i]);'}</h4>
      </div>
    ),
    (
      <div key='codeLine14' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;++i;</h4>
      </div>
    ),
    (
      <div key='codeLine15' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='codeLine16' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine17' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-3)' }}>PASSWORD&nbsp;</h4>
        <h4>{'== argv[argc])'}</h4>
      </div>
    ),
    (
      <div key='codeLine18' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'{'}</h4>
      </div>
    ),
    (
      <div key='codeLine19' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'""'}</h4>
        <h4>{'); // doesn\'t work without it'}</h4>
      </div>
    ),
    (
      <div key='codeLine20' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;goto&nbsp;</h4>
        <h4>there;</h4>
      </div>
    ),
    (
      <div key='codeLine21' className='codeLine'>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</h4>
      </div>
    ),
    (
      <div key='codeLine22' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine23' className='codeLine'>
        <h4 style={{ color: 'var(--color-1)' }}>&nbsp;&nbsp;&nbsp;&nbsp;printf</h4>
        <h4>{'('}</h4>
        <h4 style={{ color: 'var(--color-4)' }}>{'"all good\\n"'}</h4>
        <h4>{');'}</h4>
      </div>
    ),
    (
      <div key='codeLine24' className='codeLine'>&nbsp;</div>
    ),
    (
      <div key='codeLine25' className='codeLine'>
        <h4 style={{ color: 'var(--color-2)' }}>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</h4>
        <h4>{'(0);'}</h4>
      </div>
    ),
    (
      <div key='codeLine26' className='codeLine'>
        <h4>{'}'}</h4>
      </div>
    )
  ]

  return (
    <section id='home'>
      <div className='home'>
        <div className='textAndCode'>
          <div className='text'>
            <div className='textLine'>
              <h1 style={{ color: 'var(--color-1)' }}>Hi!</h1>
            </div>
            <div className='textLine'>
              <h1>My name is&nbsp;</h1>
              <h1 style={{ color: 'var(--color-2)' }}>Corentin Chapellier</h1>
            </div>
            <div className='textLine'>
              <h4>I am a&nbsp;</h4>
              <h4 style={{ color: 'var(--color-3)' }}>Software Developer</h4>
            </div>
            <div className='textLine'>
              <h4>Here is my&nbsp;</h4>
              <h4 style={{ color: 'var(--color-4)' }}>Personal Site</h4>
            </div>
          </div>

          <div className='code'>
            {
              lines.map((line, index) => index < displayedLines
                ? line
                : <div key={`space${index}`} className='codeLine'>&nbsp;</div>
              )
            }
          </div>
        </div>

        <div className='profilePictureWrapperWrapper'>
          <div className='spacerTop'></div>
          <div className='profilePictureWrapper'>
            <div className='profilePictureBackground' />
            <img src={require('../../assets/ProfilePicture.jpg')} alt="profile picture" className='profilePicture'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
