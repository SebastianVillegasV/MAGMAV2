'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!$%'

export default function TextScramble({
  text,
  className,
  trigger = 'mount',
  style,
}: {
  text: string
  className?: string
  trigger?: 'mount' | 'hover'
  style?: React.CSSProperties
}) {
  const [display, setDisplay] = useState(trigger === 'mount' ? '' : text)
  const running = useRef(false)

  const scramble = () => {
    if (running.current) return
    running.current = true
    let frame = 0
    const totalFrames = text.length * 4
    const tick = () => {
      const revealed = Math.floor(frame / 4)
      setDisplay(
        text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealed) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      frame++
      if (frame <= totalFrames) requestAnimationFrame(tick)
      else { setDisplay(text); running.current = false }
    }
    requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (trigger === 'mount') {
      const timeout = setTimeout(scramble, 200)
      return () => clearTimeout(timeout)
    }
  }, []) // eslint-disable-line

  if (trigger === 'hover') {
    return (
      <span
        className={className}
        style={{ ...style, cursor: 'default' }}
        onMouseEnter={scramble}
      >
        {display}
      </span>
    )
  }

  return <span className={className} style={style}>{display}</span>
}
