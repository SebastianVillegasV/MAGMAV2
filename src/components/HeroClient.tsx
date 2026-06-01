'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TextScramble from './TextScramble'

const EXPO: [number, number, number, number] = EXPO

export default function HeroClient() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      blobRef.current.style.background = `radial-gradient(ellipse 80% 60% at ${x}% ${y}%, rgba(192,40,28,0.14) 0%, transparent 60%)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--magma-black)',
      }}
    >
      {/* Interactive mouse-tracking glow */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(192,40,28,0.12) 0%, transparent 60%)',
          transition: 'background 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient amber blob */}
      <div
        className="ambient-blob"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '55%',
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(232,150,12,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--stroke) 1px, transparent 1px),
            linear-gradient(90deg, var(--stroke) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top-right editorial tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ position: 'absolute', top: 'calc(var(--nav-h) + 32px)', right: 'var(--gutter)', textAlign: 'right' }}
      >
        <p className="t-label">Plataforma B2B</p>
        <p className="t-label" style={{ color: 'var(--magma-amber)', marginTop: 4 }}>
          Audiovisual × Tecnología
        </p>
      </motion.div>

      {/* Hero content */}
      <div
        className="container-magma"
        style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', position: 'relative', zIndex: 1 }}
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: EXPO }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
        >
          <span
            className="animate-pulse-amber"
            style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--magma-amber)', flexShrink: 0 }}
          />
          <TextScramble
            text="EQUIPOS QUE CIERRAN MÁS"
            className="t-kicker"
            trigger="mount"
          />
        </motion.div>

        {/* Main headline */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 9.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--magma-bone)',
              maxWidth: '14ch',
            }}
          >
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: EXPO }}
              style={{ display: 'block', overflow: 'hidden' }}
            >
              Vender mejor
            </motion.span>
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: EXPO }}
              style={{ display: 'block', overflow: 'hidden' }}
            >
              <span className="gradient-text">se aprende.</span>
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheadline + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: EXPO }}
          style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 40, marginTop: 'clamp(32px, 5vw, 56px)' }}
        >
          <p style={{ maxWidth: '44ch', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6, color: 'var(--magma-bone-dim)' }}>
            Magma combina producción audiovisual y tecnología educativa
            para transformar cómo los equipos comerciales aprenden,
            practican y aplican.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
            <Link href="/contacto" className="btn-primary btn-glow">
              Agenda una llamada
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
              </svg>
            </Link>
            <Link href="/servicios" className="btn-ghost">
              Ver servicios
            </Link>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{ display: 'flex', gap: 0, marginTop: 'clamp(48px, 8vw, 80px)', borderTop: '1px solid var(--stroke)', paddingTop: 'clamp(24px, 4vw, 40px)' }}
        >
          {[
            { value: '3×', label: 'Más rápido' },
            { value: '87%', label: 'Retención' },
            { value: '40+', label: 'Equipos' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                paddingRight: 32,
                borderRight: i < 2 ? '1px solid var(--stroke)' : 'none',
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <p
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: 8,
                  background: 'linear-gradient(135deg, var(--magma-amber) 0%, #E8500C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </p>
              <p className="t-label" style={{ color: 'var(--magma-bone-dim)', textTransform: 'none', letterSpacing: '0', fontSize: '0.75rem', lineHeight: 1.4 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, transparent, var(--magma-black))', pointerEvents: 'none' }} />
    </section>
  )
}
