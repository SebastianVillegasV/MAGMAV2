'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  return (
    <section
      className="section"
      style={{ background: 'var(--magma-mid)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Soft brand glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '45%',
          aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(202,17,17,0.06) 0%, transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-magma" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EXPO }}
          style={{ maxWidth: '52ch', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <p className="t-kicker" style={{ marginBottom: 16 }}>Magma en acción</p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--magma-bone)',
              marginBottom: 20,
            }}
          >
            El aprendizaje en el{' '}
            <span className="gradient-text">momento de la verdad.</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.65, color: 'var(--magma-bone-dim)' }}>
            Un vendedor que recibe entrenamiento sobre productos y servicios
            directamente en WhatsApp — el canal donde ya trabaja todos los días.
            Sin apps nuevas, sin fricción: la fórmula correcta en el momento
            exacto, con asistencia de IA que lo apoya en todo momento.
          </p>
        </motion.div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: EXPO }}
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(42,40,32,0.18)',
            border: '1px solid var(--stroke)',
            background: '#000',
            maxWidth: 1000,
            margin: '0 auto',
            aspectRatio: '3 / 2',
          }}
        >
          <video
            ref={videoRef}
            src="/videos/interaccion-whatsapp.mp4"
            poster="/posters/interaccion-whatsapp.jpg"
            controls={playing}
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Play overlay */}
          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Reproducir video"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                background: 'linear-gradient(to top, rgba(42,40,32,0.45) 0%, rgba(42,40,32,0.10) 50%, rgba(42,40,32,0.25) 100%)',
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            >
              <span
                className="video-play-btn"
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: '50%',
                  background: 'var(--magma-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 40px rgba(202,17,17,0.45)',
                  transition: 'transform 300ms var(--ease-out-expo), box-shadow 300ms ease',
                }}
              >
                <svg width="26" height="30" viewBox="0 0 26 30" fill="none" style={{ marginLeft: 4 }}>
                  <path d="M25 13.27a2 2 0 0 1 0 3.46L3 29.46A2 2 0 0 1 0 27.73V2.27A2 2 0 0 1 3 .54L25 13.27Z" fill="var(--magma-ink-inverse)" />
                </svg>
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--magma-ink-inverse)',
                  textShadow: '0 1px 8px rgba(0,0,0,0.4)',
                }}
              >
                Ver interacción real · 0:38
              </span>
            </button>
          )}
        </motion.div>

        {/* Impact points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EXPO }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 3vw, 40px)',
            maxWidth: 1000,
            margin: 'clamp(32px, 5vw, 48px) auto 0',
          }}
        >
          {[
            { k: 'En el flujo real', v: 'Entrenamiento dentro de WhatsApp, sin apps ni fricción.' },
            { k: 'Gamificado', v: 'Puntos, rankings y reconocimiento que motivan al equipo.' },
            { k: 'Asistencia', v: 'Acceso 24/7 al banco de conocimiento de toda la organización; un agente IA resuelve cualquier inquietud.' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                paddingTop: 20,
                borderTop: '2px solid var(--magma-red)',
              }}
            >
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--magma-bone)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                {item.k}
              </p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--magma-bone-dim)' }}>
                {item.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
