'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }
    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const onLinkEnter = () => {
      ring.style.transform += ' scale(2.2)'
      ring.style.borderColor = 'var(--magma-red)'
      dot.style.opacity = '0'
    }
    const onLinkLeave = () => {
      ring.style.borderColor = 'rgba(200,55,45,0.5)'
      dot.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    const links = document.querySelectorAll('a, button, [role="button"]')
    links.forEach(l => {
      l.addEventListener('mouseenter', onLinkEnter)
      l.addEventListener('mouseleave', onLinkLeave)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      links.forEach(l => {
        l.removeEventListener('mouseenter', onLinkEnter)
        l.removeEventListener('mouseleave', onLinkLeave)
      })
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
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
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1px solid rgba(200,55,45,0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 200ms ease, border-color 200ms ease, transform 200ms var(--ease-out-expo)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
