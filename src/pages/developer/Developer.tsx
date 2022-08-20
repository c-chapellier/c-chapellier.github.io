import React from 'react'
import './Developer.scss'
import Rt from '../../components/rt/Rt'

interface Coord {
  x: number
  y: number
}

const Developer: React.FC<any> = () => {
  const [dragging, setDragging] = React.useState(false)
  const [position, setPosition] = React.useState<Coord>({ x: 0, y: 0 })
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
    <section id='developer' className='developer'>
      <div
        className='window'
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div className='titleBar'>
          <button className='minimizeButton'>-</button>
          <p>Raytracer</p>
          <button
            className='moveButton'
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {'>'}
          </button>
        </div>
        <div className='menuBar'>
          <p>Disk</p>
          <p>View</p>
          <p>Options</p>
        </div>
        <div className='clientArea'>
          <Rt />
        </div>
      </div>
    </section >
  )
}

export default Developer
