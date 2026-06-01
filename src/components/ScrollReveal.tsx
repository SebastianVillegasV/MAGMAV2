'use client'

import { motion, type Variants, type Transition } from 'framer-motion'
import { ReactNode } from 'react'

// Typed as Transition first — prevents TypeScript widening ease to number[]
// when the object is later checked against Variants
const itemTransition: Transition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

const revealTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: itemTransition },
}

export function RevealContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={item}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function RevealText({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={revealTransition}
    >
      {children}
    </motion.div>
  )
}
