'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Stat = { prefix?: string; value: number; suffix?: string; label: string }

/* ─── Number that counts up on mount ─── */
function Counter({ to, prefix = '', suffix = '', duration = 1100 }: {
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

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const count = stats.length
  const ref = useRef<HTMLElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const prevIndex = useRef(0)
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  // Scroll-driven index via getBoundingClientRect (robust across browsers).
  // setActive fires ONLY when the index actually changes (not every frame),
  // so the counter isn't remounted mid-count.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const vh = window.innerHeight
      const total = el.offsetHeight - vh
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
      const p = total > 0 ? scrolled / total : 0
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p})`
      const i = Math.max(0, Math.min(count - 1, Math.floor(p * count + 0.00001)))
      if (i !== prevIndex.current) {
        setDir(i > prevIndex.current ? 1 : -1)
        prevIndex.current = i
        setActive(i)
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [count])

  const current = stats[active]
  const indexLabel = String(active + 1).padStart(2, '0')

  return (
    <section
      ref={ref}
      style={{ height: `${count * 85}vh`, position: 'relative', background: 'var(--magma-dark)' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Lava background — slowly drifting, blurred red blobs */}
        <div className="lava-bg" aria-hidden>
          <span className="lava-blob lava-a" />
          <span className="lava-blob lava-b" />
          <span className="lava-blob lava-c" />
        </div>

        <div className="container-magma" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <p className="t-kicker" style={{ marginBottom: 'clamp(24px, 5vh, 56px)', color: 'var(--magma-amber)' }}>
            Magma en números
          </p>

          <div className="stats-scroll-grid">
            {/* Left: the metric */}
            <div style={{ position: 'relative', minHeight: 'clamp(180px, 32vh, 340px)' }}>
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ y: dir > 0 ? 70 : -70, opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                  exit={{ y: dir > 0 ? -50 : 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  transition={{ duration: 0.6, ease: EXPO }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono), ui-monospace, monospace',
                      fontSize: 'clamp(4.5rem, 16vw, 12rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.05em',
                      lineHeight: 0.9,
                      background: 'linear-gradient(120deg, var(--magma-red-bright) 20%, var(--magma-amber) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      width: 'fit-content',
                    }}
                  >
                    <Counter to={current.value} prefix={current.prefix} suffix={current.suffix} />
                  </div>
                  <p
                    style={{
                      marginTop: 'clamp(12px, 2vh, 24px)',
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      color: 'var(--magma-cream)',
                      maxWidth: '18ch',
                      lineHeight: 1.2,
                    }}
                  >
                    {current.label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: giant index + progress */}
            <div className="stats-scroll-aside">
              <div style={{ position: 'relative', height: 'clamp(120px, 22vh, 240px)', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                <AnimatePresence mode="wait" custom={dir} initial={false}>
                  <motion.span
                    key={indexLabel}
                    custom={dir}
                    initial={{ y: dir > 0 ? '55%' : '-55%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: dir > 0 ? '-55%' : '55%', opacity: 0 }}
                    transition={{ duration: 0.6, ease: EXPO }}
                    style={{
                      fontFamily: 'var(--font-mono), ui-monospace, monospace',
                      fontSize: 'clamp(7rem, 18vw, 16rem)',
                      fontWeight: 700,
                      lineHeight: 0.8,
                      color: 'transparent',
                      WebkitTextStroke: '1.5px rgba(226,222,192,0.28)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {indexLabel}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Progress bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'clamp(20px, 4vh, 40px)', width: '100%' }}>
                <div style={{ position: 'relative', flex: 1, height: 2, background: 'rgba(226,222,192,0.15)', overflow: 'hidden' }}>
                  <div
                    ref={fillRef}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      transformOrigin: 'left',
                      transform: 'scaleX(0)',
                      background: 'linear-gradient(90deg, var(--magma-red), var(--magma-amber))',
                    }}
                  />
                </div>
                <span style={{ fontFamily: 'var(--font-mono), ui-monospace, monospace', fontSize: '0.8125rem', letterSpacing: '0.1em', color: 'var(--magma-bone-dim)', flexShrink: 0 }}>
                  {indexLabel} / {String(count).padStart(2, '0')}
                </span>
              </div>

              {/* Scroll hint on first card */}
              <AnimatePresence>
                {active === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={{ marginTop: 24, fontSize: '0.6875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--magma-bone-dim)', display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    Desliza para ver más
                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }} style={{ display: 'inline-block' }}>↓</motion.span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
