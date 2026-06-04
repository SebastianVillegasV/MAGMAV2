import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description:
    'Resultados reales de equipos comerciales que transformaron su capacidad con Magma. Casos B2B de sectores tecnología, inmobiliario y retail.',
}

const cases = [
  {
    id: '01',
    client: 'Empresa Tecnología SaaS',
    sector: 'SaaS B2B',
    challenge:
      'El equipo de ventas no podía explicar la propuesta de valor técnica en llamadas de discovery. Alta tasa de abandono antes de la demo.',
    solution:
      'Produjo 6 fórmulas de posicionamiento: cómo abrir una llamada de discovery, cómo manejar objeciones técnicas y cómo conectar el producto con el dolor del cliente.',
    results: [
      { value: '+38%', label: 'Tasa de conversión a demo' },
      { value: '−22%', label: 'Tiempo de ciclo de venta' },
      { value: '4 sem', label: 'De diagnóstico a impacto' },
    ],
    tags: ['Discovery', 'Demo conversion', 'Objeciones técnicas'],
  },
  {
    id: '02',
    client: 'Constructora Residencial',
    sector: 'Real Estate',
    challenge:
      'Vendedores con alta rotación y conocimiento desigual del portafolio. Cada sala de ventas funcionaba diferente.',
    solution:
      'Fórmulas de producto por proyecto, manejo de objeciones de precio y guías de proceso estandarizadas, accesibles desde móvil para los asesores en sala.',
    results: [
      { value: '+51%', label: 'Consistencia del proceso en salas' },
      { value: '3×', label: 'Velocidad de onboarding de asesores' },
      { value: '92%', label: 'Adopción de plataforma primer mes' },
    ],
    tags: ['Onboarding', 'Estandarización', 'Móvil-first'],
  },
  {
    id: '03',
    client: 'Distribuidora Retail B2B',
    sector: 'Retail / Distribución',
    challenge:
      'Fuerza de ventas de campo sin acceso constante a capacitación. El catálogo cambiaba cada trimestre y los vendedores no estaban al día.',
    solution:
      'Catálogo interactivo en fórmulas de video por categoría, con actualizaciones trimestrales y ruta de aprendizaje diferenciada por canal (supermercados vs. tiendas independientes).',
    results: [
      { value: '+29%', label: 'Ventas en categorías nuevas' },
      { value: '−40%', label: 'Tiempo en capacitación presencial' },
      { value: '100%', label: 'Cobertura de fuerza de campo' },
    ],
    tags: ['Campo', 'Catálogo', 'Actualización continua'],
  },
]

const testimonials = [
  {
    quote:
      'Antes de Magma, capacitar a un vendedor nuevo tomaba 6 semanas. Ahora en 2 semanas ya está listo para atender clientes.',
    name: 'Director Comercial',
    company: 'Empresa Tecnología SaaS',
  },
  {
    quote:
      'Lo que más valoramos es que el contenido no envejece: se actualiza y el equipo lo consume sin necesidad de reuniones.',
    name: 'Gerente de Ventas',
    company: 'Constructora Residencial',
  },
]

export default function CasosPage() {
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
        <div
          style={{
            position: 'absolute',
            left: '-10%',
            top: '30%',
            width: '50%',
            height: '70%',
            background: 'radial-gradient(ellipse at 20% 60%, rgba(206,141,37,0.09) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container-magma" style={{ position: 'relative', zIndex: 1 }}>
          <p className="t-kicker" style={{ marginBottom: 24 }}>Casos de éxito</p>
          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--magma-bone)',
              maxWidth: '16ch',
            }}
          >
            Números que<br />
            <span style={{ color: 'var(--magma-amber)' }}>hablan solos.</span>
          </h1>
        </div>
      </section>

      {/* ── CASES ───────────────────────────── */}
      {cases.map((c, i) => (
        <article
          key={i}
          style={{
            borderBottom: '1px solid var(--stroke)',
            background: i % 2 === 0 ? 'var(--magma-black)' : 'var(--magma-deep)',
          }}
        >
          <div className="container-magma">
            <div
              style={{
                paddingBlock: 'clamp(64px, 10vw, 120px)',
              }}
            >
              {/* Case header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  marginBottom: 48,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Pragmatica, Helvetica Neue, sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--magma-amber)',
                  }}
                >
                  {c.id}
                </span>
                <div style={{ width: 40, height: 1, background: 'var(--stroke-bright)' }} />
                <span className="t-label">{c.sector}</span>
              </div>

              {/* Main grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(40px, 6vw, 80px)',
                  marginBottom: 48,
                }}
              >
                {/* Left: narrative */}
                <div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                      color: 'var(--magma-bone)',
                      marginBottom: 32,
                      lineHeight: 1.2,
                    }}
                  >
                    {c.client}
                  </h2>

                  <div style={{ marginBottom: 28 }}>
                    <p className="t-kicker" style={{ marginBottom: 12 }}>Desafío</p>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--magma-bone-dim)' }}>
                      {c.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="t-kicker" style={{ color: 'var(--magma-red)', marginBottom: 12 }}>
                      Solución Magma
                    </p>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--magma-bone-dim)' }}>
                      {c.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 32 }}>
                    {c.tags.map((tag, j) => (
                      <span
                        key={j}
                        style={{
                          padding: '6px 14px',
                          border: '1px solid var(--stroke)',
                          fontSize: '0.6875rem',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--magma-bone-dim)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: results */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 0,
                  }}
                >
                  {c.results.map((r, j) => (
                    <div
                      key={j}
                      style={{
                        paddingBlock: 28,
                        borderBottom: j < c.results.length - 1 ? '1px solid var(--stroke)' : 'none',
                        borderTop: j === 0 ? '1px solid var(--stroke)' : 'none',
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        gap: 24,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Pragmatica, Helvetica Neue, sans-serif',
                          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                          fontWeight: 700,
                          letterSpacing: '-0.04em',
                          color: 'var(--magma-amber)',
                          lineHeight: 1,
                        }}
                      >
                        {r.value}
                      </span>
                      <span
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--magma-bone-dim)',
                          maxWidth: '22ch',
                          textAlign: 'right',
                          lineHeight: 1.4,
                        }}
                      >
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* ── TESTIMONIALS ────────────────────── */}
      <section
        className="section"
        style={{ background: 'var(--magma-mid)', borderBottom: '1px solid var(--stroke)' }}
      >
        <div className="container-magma">
          <p className="t-kicker" style={{ marginBottom: 56 }}>Lo que dicen</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--magma-deep)',
                  padding: 'clamp(32px, 4vw, 48px)',
                  border: '1px solid var(--stroke)',
                }}
              >
                <p
                  style={{
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.45,
                    color: 'var(--magma-bone)',
                    marginBottom: 32,
                  }}
                >
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      width: 1,
                      height: 32,
                      background: 'var(--magma-amber)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--magma-bone)' }}>
                      {t.name}
                    </p>
                    <p className="t-label" style={{ color: 'var(--magma-grey)', marginTop: 2 }}>
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--magma-black)', textAlign: 'center' }}>
        <div className="container-magma">
          <p className="t-kicker" style={{ marginBottom: 24 }}>Siguiente caso</p>
          <h2 className="t-display" style={{ color: 'var(--magma-bone)', marginBottom: 16 }}>
            El tuyo.
          </h2>
          <p
            style={{
              maxWidth: '36ch',
              margin: '0 auto 48px',
              fontSize: '1rem',
              color: 'var(--magma-bone-dim)',
              lineHeight: 1.65,
            }}
          >
            Agenda una sesión de diagnóstico y empecemos a construir los resultados de tu equipo.
          </p>
          <Link href="/contacto" className="btn-primary">
            Quiero ser el próximo caso
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
