'use client'

import { motion } from 'framer-motion'

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function ServiceCard({
  number,
  title,
  body,
  delay = 0,
}: {
  number: string
  title: string
  body: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EXPO }}
      whileHover={{ y: -6 }}
      style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: 'clamp(28px, 4vw, 48px)',
        border: '1px solid rgba(42,40,32,0.08)',
        borderRadius: 16,
        position: 'relative',
        cursor: 'default',
        boxShadow: '0 4px 20px rgba(42,40,32,0.05)',
        transition: 'border-color 300ms ease, box-shadow 300ms ease',
      }}
      onHoverStart={(e) => {
        const el = e.target as HTMLElement
        el.style.borderColor = 'rgba(202,17,17,0.35)'
        el.style.boxShadow = '0 20px 50px rgba(42,40,32,0.14), 0 0 0 1px rgba(202,17,17,0.10)'
      }}
      onHoverEnd={(e) => {
        const el = e.target as HTMLElement
        el.style.borderColor = 'rgba(42,40,32,0.08)'
        el.style.boxShadow = '0 4px 20px rgba(42,40,32,0.05)'
      }}
    >
      <span
        style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: 'var(--magma-amber)',
          display: 'block',
          marginBottom: 40,
        }}
      >
        {number}
      </span>

      <h3
        style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: 'var(--magma-bone)',
          marginBottom: 16,
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.9375rem',
          lineHeight: 1.65,
          color: 'var(--magma-bone-dim)',
        }}
      >
        {body}
      </p>

      {/* Bottom accent line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: EXPO }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 2,
          background: 'linear-gradient(90deg, var(--magma-amber), var(--magma-red))',
        }}
      />
    </motion.div>
  )
}
