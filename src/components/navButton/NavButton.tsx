import React from 'react'
import './NavButton.scss'

interface NavButtonProps {
  index: number
  text: string
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { index, text } = props
  const colorIndex = (index % 4) + 1

  const [isHover, setIsHover] = React.useState(false)

  const handleMouseEnter = (): void => {
    setIsHover(true)
  }

  const handleMouseLeave = (): void => {
    setIsHover(false)
  }

  return (
    <h3
      className='button'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: `var(--color-${colorIndex}`,
        background: isHover ? 'var(--color-dark-black)' : ''
      }}
    >
      {text}
    </h3>
  )
}

export default NavButton
