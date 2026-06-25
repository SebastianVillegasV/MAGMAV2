'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Service = {
  number: string
  category: string
  title: string
  headline: string
  body: string
  deliverables: string[]
}

export default function ServicesSlider({ services }: { services: Service[] }) {
  const count = services.length
  const [[index, dir], setState] = useState<[number, number]>([0, 0])

  const goTo = (n: number) => setState(([cur]) => [n, n > cur ? 1 : -1])
  const next = () => setState(([cur]) => [(cur + 1) % count, 1])
  const prev = () => setState(([cur]) => [(cur - 1 + count) % count, -1])

  const svc = services[index]

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -350) next()
    else if (info.offset.x > 60 || info.velocity.x > 350) prev()
  }

  return (
    <section className="section" style={{ background: 'var(--magma-mid)', position: 'relative', overflow: 'hidden' }}>
      {/* Soft glows behind the frame so the frosted glass reads */}
      <div style={{ position: 'absolute', top: '18%', left: '8%', width: '38%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(202,17,17,0.07) 0%, transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '8%', right: '10%', width: '34%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(206,141,37,0.06) 0%, transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div className="container-magma" style={{ position: 'relative', zIndex: 1 }}>
        {/* Tabs — all three palancas always visible */}
        <div className="services-tabs">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`services-tab${i === index ? ' is-active' : ''}`}
            >
              <span className="services-tab-num">{s.number}</span>
              <span className="services-tab-title">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Frame */}
        <div className="services-frame">
          {/* Head: category + arrows */}
          <div className="services-frame-head">
            <span className="t-label" style={{ color: 'var(--magma-grey)' }}>
              {svc.category}
            </span>
            <div className="services-nav">
              <button onClick={prev} aria-label="Anterior" className="services-arrow">
                <Arrow dir="left" />
              </button>
              <span className="services-counter">
                {svc.number} / {String(count).padStart(2, '0')}
              </span>
              <button onClick={next} aria-label="Siguiente" className="services-arrow">
                <Arrow dir="right" />
              </button>
            </div>
          </div>

          {/* Sliding content */}
          <div className="services-stage">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
                transition={{ duration: 0.45, ease: EXPO }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={onDragEnd}
                className="services-grid"
              >
                {/* Left */}
                <div>
                  <h2
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.05,
                      color: 'var(--magma-bone)',
                      marginBottom: 20,
                    }}
                  >
                    {svc.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                      fontWeight: 500,
                      color: 'var(--magma-amber)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {svc.headline}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      color: 'var(--magma-bone-dim)',
                      marginBottom: 36,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {svc.body}
                  </p>
                  <p
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--magma-bone-dim)',
                      marginBottom: 16,
                    }}
                  >
                    Entregables
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {svc.deliverables.map((d, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 14,
                          fontSize: '0.9375rem',
                          color: 'var(--magma-bone)',
                          paddingBlock: 10,
                          borderBottom: '1px solid var(--stroke)',
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--magma-amber)', flexShrink: 0 }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" style={{ transform: dir === 'left' ? 'scaleX(-1)' : 'none' }}>
      <path d="M1 7H14M10 1L15 7L10 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  )
}
