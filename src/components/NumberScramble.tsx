'use client'

import { useEffect, useRef, useState } from 'react'

const DIGITS = '0123456789'
const isLetter = (ch: string) => /[a-zA-ZÀ-ÿ]/.test(ch)

type Line = { text: string; color?: string }

// Deterministic initial digits (same on server and client → no hydration
// mismatch). Each letter maps to a stable digit from its char code.
function seedDigits(text: string) {
  return text
    .split('')
    .map((ch) => (isLetter(ch) ? String(ch.charCodeAt(0) % 10) : ch))
    .join('')
}

/**
 * Renders headline text that starts as spinning digits and resolves,
 * left to right, into the final letters. Triggers once when scrolled
 * into view. Punctuation and spaces stay fixed.
 */
export default function NumberScramble({
  lines,
  className,
  style,
  duration = 1900,
}: {
  lines: Line[]
  className?: string
  style?: React.CSSProperties
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState<Line[]>(() =>
    lines.map((l) => ({ ...l, text: seedDigits(l.text) }))
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      const totalChars = lines.reduce((n, l) => n + l.text.length, 0)
      const start = performance.now()
      let raf = 0
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        // Hold pure spinning numbers for the first ~28%, then resolve
        // left-to-right over the rest, so the "numbers" phase is visible.
        const resolveP = Math.max(0, (progress - 0.28) / 0.72)
        const revealed = Math.floor(resolveP * totalChars)
        let idx = 0
        setDisplay(
          lines.map((l) => ({
            ...l,
            text: l.text
              .split('')
              .map((ch) => {
                const myIdx = idx++
                if (!isLetter(ch)) return ch
                return myIdx < revealed ? ch : DIGITS[Math.floor(Math.random() * 10)]
              })
              .join(''),
          }))
        )
        if (progress < 1) raf = requestAnimationFrame(tick)
        else setDisplay(lines)
      }
      raf = requestAnimationFrame(tick)
    }

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(lines)
      started.current = true
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className} style={{ ...style, fontVariantNumeric: 'tabular-nums' }}>
      {display.map((l, i) => (
        <span key={i} style={{ color: l.color }}>
          {l.text}
          {i < display.length - 1 && <br />}
        </span>
      ))}
    </span>
  )
}
