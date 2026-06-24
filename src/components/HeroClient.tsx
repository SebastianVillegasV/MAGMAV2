'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TextScramble from './TextScramble'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function HeroClient() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!blobRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      // Coral/red glow follows the cursor — matches POC primary color
      blobRef.current.style.background = `radial-gradient(ellipse 70% 55% at ${x}% ${y}%, rgba(202,17,17,0.10) 0%, transparent 65%)`
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
      {/* Interactive mouse-tracking red glow */}
      <div
        ref={blobRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 55% at 70% 30%, rgba(202,17,17,0.09) 0%, transparent 65%)',
          transition: 'background 0.25s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Teal ambient blob bottom-left — mirrors POC corner glow */}
      <div
        className="ambient-blob"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: '50%',
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(42,114,130,0.08) 0%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Amber accent blob — subtle, top center */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '40%',
          width: '30%',
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(232,150,12,0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Topographic contour lines — evokes "magma" / cartographic relief.
          Reveals with a wipe on load, then drifts slowly. */}
      <div
        className="topo-anim"
        style={{
          position: 'absolute',
          inset: '-4%',
          backgroundImage: 'url(/topographic.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          color: 'var(--magma-dark)',
          maskImage: 'radial-gradient(ellipse 95% 85% at 72% 55%, black 25%, transparent 88%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 72% 55%, black 25%, transparent 88%)',
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
        <p className="t-label">Formación de equipos</p>
        <p className="t-label" style={{ color: 'var(--magma-teal)', marginTop: 4 }}>
          comerciales y empresariales
        </p>
      </motion.div>

      {/* Hero content */}
      <div
        className="container-magma"
        style={{ paddingBottom: 'clamp(60px, 10vw, 120px)', position: 'relative', zIndex: 1 }}
      >
        {/* Kicker — red dot + scramble text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: EXPO }}
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
        >
          <span
            className="animate-pulse-red"
            style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--magma-red)', flexShrink: 0 }}
          />
          <TextScramble
            text="EQUIPOS MÁS CAPACES"
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
              Entrena distinto,
            </motion.span>
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: EXPO }}
              style={{ display: 'block', overflow: 'hidden' }}
            >
              {/* gradient-text: red → amber */}
              <span className="gradient-text">distintos resultados</span>
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
          <p style={{ maxWidth: '50ch', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6, color: 'var(--magma-bone-dim)' }}>
            Un manual o una presentación no cambia comportamientos. Una
            experiencia sí. Magma convierte todo el conocimiento de tu empresa
            en algo que tus equipos ven, sienten y aplican.
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
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, transparent, var(--magma-black))', pointerEvents: 'none' }} />
    </section>
  )
}
