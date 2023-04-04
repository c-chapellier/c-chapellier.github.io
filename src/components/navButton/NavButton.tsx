import React from 'react'
import { Link } from 'react-scroll'
import './NavButton.scss'

interface NavButtonProps {
  index: number
  menu: { name: string, sectionId: string }
}

const NavButton: React.FC<NavButtonProps> = (props) => {
  const { index, menu } = props
  const colorIndex = (index % 4) + 1

  const [isHover, setIsHover] = React.useState(false)

  const handleMouseEnter = (): void => {
    setIsHover(true)
  }

  const handleMouseLeave = (): void => {
    setIsHover(false)
  }

  return (
    <Link
      className='link'
      to={menu.sectionId}
      smooth={true}
      offset={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        style={{
          color: `var(--color-${colorIndex})`,
          background: isHover ? 'var(--color-dark-black)' : ''
        }}
      >
        {menu.name}
      </h3>
    </Link>
  )
}

export default NavButton
