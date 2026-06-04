'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  // Only enable on devices with a fine pointer + hover (desktop).
  // Touch / coarse-pointer devices keep the native cursor.
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (mq.matches) setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.documentElement.classList.add('cursor-active')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let hovering = false
    let visible = false
    let rafId = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      visible = true
    }
    const onLeaveWindow = () => { visible = false }
    // Event delegation → also covers links rendered after mount
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null
      hovering = !!t?.closest?.('a, button, [role="button"], input, textarea, select, label')
    }

    const loop = () => {
      // Dot tracks the pointer 1:1
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      // Ring eases toward the pointer; scale + color reflect hover state
      // (computed every frame so it never gets overwritten)
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      const scale = hovering ? 1.8 : 1
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${scale})`
      ring.style.borderColor = hovering ? 'var(--magma-red)' : 'rgba(202,17,17,0.5)'
      ring.style.opacity = visible ? '1' : '0'
      dot.style.opacity = visible && !hovering ? '1' : '0'
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow)
      cancelAnimationFrame(rafId)
      document.documentElement.classList.remove('cursor-active')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--magma-red)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 200ms ease',
          willChange: 'transform, opacity',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(202,17,17,0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 200ms ease, border-color 200ms ease',
          willChange: 'transform, opacity',
        }}
      />
    </>
  )
}
