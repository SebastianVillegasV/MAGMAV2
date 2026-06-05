import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import AnimatedStats from '@/components/AnimatedCounter'
import { RevealContainer, RevealItem, RevealText } from '@/components/ScrollReveal'
import TextScramble from '@/components/TextScramble'
import HeroClient from '@/components/HeroClient'
import VideoShowcase from '@/components/VideoShowcase'

export const metadata: Metadata = {
  title: 'Magma — Equipos comerciales más capaces',
}

/* ─── Data ─────────────────────────────────── */
const services = [
  {
    number: '01',
    title: 'Diagnóstico Comercial',
    body: 'Mapeamos las brechas de conocimiento y habilidad en tu equipo de ventas. Encontramos dónde se pierde la conversión.',
  },
  {
    number: '02',
    title: 'Fórmulas en Video',
    body: 'Convertimos procesos, objeciones y diferenciadores en contenido audiovisual que entrena en el flujo de trabajo real.',
  },
  {
    number: '03',
    title: 'Plataforma de Activación',
    body: 'Tecnología que distribuye, mide y adapta el contenido según el avance individual de cada vendedor.',
  },
]

const stats = [
  { value: 4, suffix: '×', label: 'Más rápido de digerir' },
  { value: 95, suffix: '%', label: 'Retención del contenido' },
  { value: 1000, suffix: '+', label: 'Comerciales potenciados' },
  { value: 96, suffix: '%', label: 'Comerciales satisfechos' },
]

const logos = [
  { src: '/clientes/jose-cuervo.png', alt: 'Jose Cuervo' },
  { src: '/clientes/dislicores.png', alt: 'Dislicores' },
  { src: '/clientes/associated-brands.png', alt: 'Associated Brands Colombia' },
  { src: '/clientes/red-bull.png', alt: 'Red Bull' },
  { src: '/clientes/chevignon.png', alt: 'Chevignon' },
  { src: '/clientes/gato-negro.png', alt: 'Gato Negro' },
  { src: '/clientes/auteco.png', alt: 'Auteco' },
  { src: '/clientes/jp-chenet.png', alt: 'JP Chenet' },
]

const steps = [
  { week: 'Semana 1–2', num: '01', title: 'Diagnóstico', desc: 'Analizamos el proceso de venta, las objeciones frecuentes y las brechas del equipo.' },
  { week: 'Semana 3–5', num: '02', title: 'Producción', desc: 'Creamos las fórmulas en video: cortas, específicas, aplicables en el día a día.' },
  { week: 'Semana 6', num: '03', title: 'Activación', desc: 'Lanzamos la plataforma y entrenamos al equipo en cómo consumir el contenido.' },
  { week: 'Semana 7–8', num: '04', title: 'Medición', desc: 'Medimos retención, aplicación y cambios en métricas comerciales reales.' },
]

/* ─── Page ─────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <HeroClient />

      {/* ── ANIMATED STATS ──────────────────── */}
      <AnimatedStats stats={stats} />

      {/* ── LOGO MARQUEE ────────────────────── */}
      <section style={{ background: 'var(--magma-black)', padding: 'clamp(32px, 5vw, 56px) 0', overflow: 'hidden' }}>
        <p className="t-label" style={{ textAlign: 'center', marginBottom: 24, color: 'var(--magma-grey)' }}>
          Marcas que han potenciado sus equipos con Magma
        </p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="marquee-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="marquee-logo" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ───────────────── */}
      <section className="section" style={{ background: 'var(--magma-deep)' }}>
        <div className="container-magma">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'center' }}>
            <RevealText>
              <span className="accent-line" style={{ marginBottom: 32 }} />
              <blockquote
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: 'var(--magma-bone)',
                }}
              >
                "El 60% de los vendedores no aplica lo que aprendió en la capacitación tradicional."
              </blockquote>
              <p style={{ marginTop: 24, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--magma-bone-dim)' }}>
                — Sales Enablement Collective, 2024
              </p>
            </RevealText>

            <RevealContainer>
              <RevealItem>
                <p className="t-kicker" style={{ marginBottom: 16 }}>El problema</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--magma-bone-dim)', marginBottom: 32 }}>
                  Los equipos comerciales aprenden en talleres desconectados de la operación real.
                  El conocimiento no llega al momento de la verdad: la llamada, la demo, el cierre.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="t-kicker" style={{ color: 'var(--magma-red)', marginBottom: 16 }}>La solución Magma</p>
                <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--magma-bone-dim)' }}>
                  Fórmulas en video cortas, precisas y medibles, disponibles en el flujo de trabajo
                  y adaptadas a la realidad de cada vendedor.
                </p>
              </RevealItem>
            </RevealContainer>
          </div>
        </div>
      </section>

      {/* ── VIDEO SHOWCASE — Magma en acción ── */}
      <VideoShowcase />

      {/* ── SERVICES PREVIEW ────────────────── */}
      <section className="section" style={{ background: 'var(--magma-black)' }}>
        <div className="container-magma">
          <RevealContainer>
            <RevealItem>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(48px, 8vw, 80px)', paddingBottom: 'clamp(24px, 4vw, 40px)', borderBottom: '1px solid var(--stroke)' }}>
                <div>
                  <p className="t-kicker" style={{ marginBottom: 16 }}>Nuestro proceso</p>
                  <h2 className="t-display" style={{ maxWidth: '12ch' }}>
                    Tres palancas,<br />
                    <span className="gradient-text">un sistema.</span>
                  </h2>
                </div>
                <Link href="/servicios" className="btn-ghost" style={{ flexShrink: 0 }}>Ver todo</Link>
              </div>
            </RevealItem>
          </RevealContainer>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {services.map((svc, i) => (
              <ServiceCard key={i} {...svc} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────── */}
      <section className="section" style={{ background: 'var(--magma-mid)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-20%', top: '50%', transform: 'translateY(-50%)', width: '60%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(206,141,37,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container-magma">
          <RevealText>
            <p className="t-kicker" style={{ marginBottom: 16 }}>Cómo funciona</p>
            <h2 className="t-headline" style={{ maxWidth: '24ch', marginBottom: 'clamp(48px, 8vw, 80px)', color: 'var(--magma-bone)' }}>
              Del diagnóstico al impacto medible en 8 semanas.
            </h2>
          </RevealText>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <RevealItem key={i} delay={i * 0.08}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '180px 1fr',
                    gap: 40,
                    paddingBlock: 28,
                    borderTop: '1px solid var(--stroke)',
                    alignItems: 'baseline',
                  }}
                >
                  <p className="t-label">{step.week}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 32 }}>
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 500, color: 'var(--magma-bone)', letterSpacing: '-0.01em' }}>
                      <span style={{ color: 'var(--magma-amber)', marginRight: 16, fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.1em' }}>
                        {step.num}
                      </span>
                      {step.title}
                    </p>
                    <p style={{ maxWidth: '38ch', fontSize: '0.9375rem', color: 'var(--magma-bone-dim)', lineHeight: 1.6, textAlign: 'right' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--magma-black)', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', left: 'var(--gutter)', bottom: -20, fontSize: 'clamp(8rem, 20vw, 20rem)', fontWeight: 700, letterSpacing: '-0.05em', color: 'transparent', WebkitTextStroke: '1px rgba(42,40,32,0.07)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
          MAGMA
        </div>
        {/* Ambient glow */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '60%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(202,17,17,0.07) 0%, transparent 60%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="container-magma" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <RevealContainer>
            <RevealItem>
              <span className="accent-line" style={{ margin: '0 auto 40px', display: 'block' }} />
            </RevealItem>
            <RevealItem>
              <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--magma-bone)', marginBottom: 24 }}>
                Tu equipo puede<br />
                <span className="gradient-text">vender diferente.</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <p style={{ maxWidth: '42ch', margin: '0 auto 48px', fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--magma-bone-dim)' }}>
                Agenda una sesión de diagnóstico gratuita. Revisamos tu proceso
                actual y te mostramos dónde puede entrar Magma.
              </p>
            </RevealItem>
            <RevealItem>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contacto" className="btn-primary btn-magnetic">
                  Agenda tu sesión
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </Link>
                <Link href="/casos" className="btn-ghost">Ver resultados</Link>
              </div>
            </RevealItem>
          </RevealContainer>
        </div>
      </section>
    </>
  )
}
