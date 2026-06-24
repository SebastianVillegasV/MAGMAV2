import type { Metadata } from 'next'
import Link from 'next/link'
import NumberScramble from '@/components/NumberScramble'
import ServicesSlider from '@/components/ServicesSlider'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Diagnóstico comercial, producción audiovisual de fórmulas y plataforma de activación. El sistema completo de Magma.',
}

const services = [
  {
    number: '01',
    category: 'Estrategia',
    title: 'Diagnóstico Comercial',
    headline: 'Primero entendemos, luego construimos.',
    body: `Antes de producir una sola línea de contenido, mapeamos en detalle el proceso de venta de tu equipo. Identificamos en qué momento del embudo se pierden oportunidades, cuáles son las objeciones recurrentes que no se saben manejar y qué tan bien conocen los vendedores el producto o servicio.

El resultado es un mapa de brechas concreto: no generalidades, sino los puntos exactos donde el conocimiento y la habilidad fallan en el momento de la verdad.`,
    deliverables: [
      'Mapa de proceso de venta documentado',
      'Reporte de brechas de conocimiento por etapa',
      'Priorización de contenidos por impacto',
      'Entrevistas con equipo comercial y líderes',
    ],
  },
  {
    number: '02',
    category: 'Producción',
    title: 'Fórmulas en Video',
    headline: 'Contenido que se aplica el mismo día.',
    body: `Las fórmulas son piezas audiovisuales de 3 a 7 minutos, diseñadas para ser consumidas en el flujo de trabajo. No son cursos largos ni presentaciones corporativas: son guías precisas para situaciones específicas de venta.

Cada fórmula tiene una estructura clara: contexto del momento de venta, el error más común, la respuesta que funciona y el ejercicio de práctica. Cinematic by design, funcional por estructura.`,
    deliverables: [
      'Producción completa: guión, grabación, edición',
      'Formato corto optimizado para móvil y desktop',
      'Branding visual alineado a tu empresa',
      'Subtítulos y versión sin audio',
    ],
  },
  {
    number: '03',
    category: 'Tecnología',
    title: 'Plataforma de Activación',
    headline: 'El conocimiento donde y cuando se necesita.',
    body: `La plataforma Magma no es un LMS genérico. Es el lugar donde las fórmulas viven, donde los vendedores las consumen antes de llamadas importantes y donde los líderes ven exactamente qué tan preparado está el equipo.

Rutas de aprendizaje por perfil, notificaciones en los momentos clave del proceso de venta, métricas de consumo y correlación con resultados comerciales reales.`,
    deliverables: [
      'Acceso ilimitado para el equipo comercial',
      'Rutas por rol y etapa del proceso',
      'Dashboard de seguimiento para líderes',
      'Integración con CRM (HubSpot, Salesforce)',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────── */}
      <section
        style={{
          paddingTop: 'calc(var(--nav-h) + clamp(60px, 10vw, 120px))',
          paddingBottom: 'clamp(60px, 10vw, 120px)',
          background: 'var(--magma-black)',
          borderBottom: '1px solid var(--stroke)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Red gradient accent */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            background: 'radial-gradient(ellipse at 80% 40%, rgba(202,17,17,0.09) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container-magma" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'center',
            }}
          >
            <div>
              <p className="t-kicker" style={{ marginBottom: 24 }}>Servicios</p>
              <h1 className="t-super" style={{ color: 'var(--magma-bone)' }}>
                <NumberScramble
                  lines={[
                    { text: 'Un sistema,' },
                    { text: 'no un curso.', color: 'var(--magma-amber)' },
                  ]}
                />
              </h1>
            </div>
            <div>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  lineHeight: 1.65,
                  color: 'var(--magma-bone-dim)',
                  maxWidth: '44ch',
                }}
              >
                Magma no es capacitación tradicional.
                Es un sistema de tres palancas diseñado para que el conocimiento
                llegue al momento exacto en que el vendedor lo necesita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL — slider de las tres palancas ── */}
      <ServicesSlider services={services} />

      {/* ── PRICING TEASER ──────────────────── */}
      <section
        className="section"
        style={{
          background: 'var(--magma-mid)',
          textAlign: 'center',
        }}
      >
        <div className="container-magma">
          <p className="t-kicker" style={{ marginBottom: 24 }}>Inversión</p>
          <h2
            className="t-display"
            style={{ color: 'var(--magma-bone)', marginBottom: 24 }}
          >
            A medida de tu operación.
          </h2>
          <p
            style={{
              maxWidth: '44ch',
              margin: '0 auto 48px',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'var(--magma-bone-dim)',
            }}
          >
            Cada empresa tiene un proceso de venta diferente. Por eso no publicamos tarifas fijas.
            Agenda una sesión de diagnóstico y construimos juntos la propuesta.
          </p>
          <Link href="/contacto" className="btn-primary">
            Agenda una sesión gratuita
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
