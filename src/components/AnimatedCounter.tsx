'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Stat = { prefix?: string; value: number; suffix?: string; label: string }

/* ─── Animated number (counts up when its card is shown) ─── */
function Counter({ to, prefix = '', suffix = '', duration = 1400 }: {
  to: number; prefix?: string; suffix?: string; duration?: number
}) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return <>{prefix}{value}{suffix}</>
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const count = stats.length
  const [[index, dir], setIndex] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const go = useCallback((d: number) => {
    setIndex(([i]) => [(i + d + count) % count, d])
  }, [count])

  const goTo = useCallback((target: number) => {
    setIndex(([i]) => [target, target > i ? 1 : -1])
  }, [])

  // Autoplay (pauses on hover / focus / drag)
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 4500)
    return () => clearInterval(id)
  }, [paused, go, index])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -300) go(1)
    else if (info.offset.x > 60 || info.velocity.x > 300) go(-1)
  }

  const current = stats[index]

  return (
    <section
      style={{ background: 'var(--magma-deep)', borderTop: '1px solid var(--stroke)', borderBottom: '1px solid var(--stroke)', padding: 'clamp(56px, 9vw, 96px) 0', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-magma">
        <motion.p
          className="t-kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EXPO }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}
        >
          Magma en números
        </motion.p>

        {/* Carousel row: arrow · card · arrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(12px, 3vw, 32px)' }}>
          <CarouselArrow dir="left" onClick={() => go(-1)} />

          <div
            style={{ position: 'relative', width: 'min(440px, 100%)', height: 280 }}
          >
            <AnimatePresence custom={dir} mode="popLayout" initial={false}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: EXPO }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => setPaused(true)}
                onDragEnd={onDragEnd}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: 'clamp(32px, 5vw, 48px)',
                  background: '#fff',
                  border: '1px solid var(--stroke)',
                  borderRadius: 20,
                  boxShadow: '0 10px 40px rgba(42,40,32,0.08)',
                  cursor: 'grab',
                }}
                whileTap={{ cursor: 'grabbing' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono), ui-monospace, monospace',
                    fontSize: 'clamp(3.5rem, 9vw, 5.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginBottom: 16,
                    background: 'linear-gradient(135deg, var(--magma-red-bright) 0%, var(--magma-amber) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <Counter to={current.value} prefix={current.prefix} suffix={current.suffix} />
                </div>
                <p
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--magma-bone-dim)',
                    lineHeight: 1.5,
                    maxWidth: '20ch',
                  }}
                >
                  {current.label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <CarouselArrow dir="right" onClick={() => go(1)} />
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 'clamp(28px, 4vw, 40px)' }}>
          {stats.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver estadística ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: i === index ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                padding: 0,
                background: i === index ? 'var(--magma-red)' : 'var(--stroke-bright)',
                cursor: 'pointer',
                transition: 'width 300ms var(--ease-out-expo), background 300ms ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CarouselArrow({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Anterior' : 'Siguiente'}
      style={{
        flexShrink: 0,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid var(--stroke-bright)',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--magma-dark)',
        cursor: 'pointer',
        transition: 'border-color 200ms ease, background 200ms ease, color 200ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--magma-red)'
        el.style.color = 'var(--magma-red)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--stroke-bright)'
        el.style.color = 'var(--magma-dark)'
      }}
    >
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" style={{ transform: dir === 'left' ? 'scaleX(-1)' : 'none' }}>
        <path d="M1 7H14M10 1L15 7L10 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
      </svg>
    </button>
  )
}
