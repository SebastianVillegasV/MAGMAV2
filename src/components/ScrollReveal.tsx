'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// Declared as explicit tuple type in the variable declaration (not via cast)
// so TypeScript never widens it to number[] when checked against Variants
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function RevealContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EXPO, delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EXPO }}
    >
      {children}
    </motion.div>
  )
}
