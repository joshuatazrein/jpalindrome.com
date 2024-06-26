'use client'
import { Reactive } from 'reactive-frames'
import Call from 'reactive-frames'
import range from 'lodash/range'
import { useRef } from 'react'

export default function Work() {
  const rectangles = useRef<SVGGElement>(null!)
  return (
    <Reactive className='h-screen w-screen'>
      <Call
        name='svg'
        draw={(s, { time: { t } }) => {
          const rects = rectangles.current.children
          let i = 0
          for (let rect of rects) {
            rect.setAttribute(
              'opacity',
              `${((Math.sin((t / 1000 + i / rects.length) * Math.PI * 2) + 1) / 2 + 0.3) * 0.7}`
            )
            i++
          }
        }}
      />
      <svg className='h-full w-full' viewBox='0 0 1 1'>
        <g fill='white' fontFamily='Andale Mono'>
          <text x={0.5} y={0.05} textAnchor='middle' fontSize={0.05}>
            Show your work
          </text>
        </g>
        <g fill='white' ref={rectangles}>
          {range(12).map(i => (
            <rect
              key={i}
              height={0.2}
              width={0.2}
              x={(i % 4) * 0.25}
              y={Math.floor(i / 4) * 0.25 + 0.2}
            />
          ))}
        </g>
      </svg>
    </Reactive>
  )
}
