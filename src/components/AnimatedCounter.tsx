'use client'

import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Counter({ to, prefix = '', suffix = '', duration = 1600 }: {
  to: number; prefix?: string; suffix?: string; duration?: number
}) {
  const { ref, inView } = useInView()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return (
    <div ref={ref}>
      {prefix}{value}{suffix}
    </div>
  )
}

export default function AnimatedStats({ stats }: {
  stats: { prefix?: string; value: number; suffix?: string; label: string }[]
}) {
  return (
    <section
      style={{
        background: 'var(--magma-deep)',
        borderTop: '1px solid var(--stroke)',
        borderBottom: '1px solid var(--stroke)',
        padding: 'clamp(48px, 8vw, 80px) 0',
      }}
    >
      <div className="container-magma">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
            gap: 0,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: 'clamp(24px, 4vw, 48px) clamp(16px, 3vw, 40px)',
                borderRight: i < stats.length - 1 ? '1px solid var(--stroke)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono), ui-monospace, monospace',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: 12,
                  background: 'linear-gradient(135deg, var(--magma-red-bright) 0%, var(--magma-amber) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--magma-bone-dim)',
                  lineHeight: 1.5,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
