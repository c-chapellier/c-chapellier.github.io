import React from 'react'
import './Win95Window.scss'

interface Coord {
  x: number
  y: number
}

interface Win95WindowProps {
  title: string
  menuBarItems: string[]
  content: JSX.Element
  defaultPosition: Coord
  selected: boolean
  onSelected: any
}

const Win95Window: React.FC<Win95WindowProps> = (props) => {
  const { title, menuBarItems, content, defaultPosition, selected, onSelected } = props

  const [dragging, setDragging] = React.useState(false)
  const [position, setPosition] = React.useState<Coord>(defaultPosition)
  const [relPosition, setRelPosition] = React.useState<Coord>({ x: 0, y: 0 })

  const onMouseDown = (e: any): any => {
    if (e.button !== 0) return

    setDragging(true)
    setRelPosition({
      x: e.pageX - position.x,
      y: e.pageY - position.y
    })

    e.stopPropagation()
    e.preventDefault()
  }

  const onMouseUp = (e: any): any => {
    setDragging(false)

    e.stopPropagation()
    e.preventDefault()
  }

  const onMouseMove = (e: any): any => {
    if (!dragging) return

    setPosition({
      x: e.pageX - relPosition.x,
      y: e.pageY - relPosition.y
    })

    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div
      className='window'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: selected ? 2 : 1
      }}
      onClick={e => onSelected(title)}
    >
      <div
        className='title-bar'
        style={{
          background: selected ? 'var(--color-blue)' : 'var(--color-grey)'
        }}
      >
        <button className='minimize-button'>-</button>
        <p style={{ color: selected ? 'var(--color-white)' : 'var(--color-black)' }}>{title}</p>
        <button
          className='move-button'
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {'>'}
        </button>
      </div>
      <div className='menu-bar'>
        {
          menuBarItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }
      </div>
      <div className='client-area'>
        {content}
      </div>
    </div>
  )
}

export default Win95Window
