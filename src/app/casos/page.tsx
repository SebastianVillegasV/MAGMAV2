import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description:
    'Resultados reales de equipos comerciales que transformaron su capacidad con Magma. Casos como Legado (Dislicores) y Sunshine (Associated Brands).',
}

const cases = [
  {
    id: '01',
    program: 'Legado',
    client: 'Dislicores',
    sector: 'Distribución de licores',
    challenge:
      'Una fuerza de ventas de 650 personas, distribuida en 8 regionales y más de 25 ciudades, con 5 roles y 5 canales de venta, debía dominar el portafolio de 24 marcas — sin frenar la operación ni depender de capacitaciones presenciales.',
    solution:
      'Construimos "Legado": 114 fórmulas en video (128 minutos de contenido) sobre una plataforma con rutas de aprendizaje por rol, pensadas para consumirse en 3 minutos al día, en el flujo de trabajo.',
    results: [
      { value: '+92%', label: 'Incremento de productividad' },
      { value: '650', label: 'Vendedores activados' },
      { value: '72%', label: 'Tasa de respuesta promedio' },
    ],
    tags: ['Fuerza de ventas', '24 marcas', 'Plataforma'],
  },
  {
    id: '02',
    program: 'Sunshine',
    client: 'Associated Brands',
    sector: 'Cereales · consumo masivo',
    challenge:
      'La formación llegaba a una sola persona por país, con poco entendimiento real, en un calendario anual y sin forma de monitorear el impacto ni el engagement del equipo.',
    solution:
      'Lanzamos "Sunshine": aprendizaje móvil claro, corto y asertivo, en píldoras de 1 a 2 minutos semanales, con presencia permanente de marca en una sola plataforma medible.',
    results: [
      { value: '+350', label: 'Personas alcanzadas en distribuidores' },
      { value: '78%', label: 'Participación' },
      { value: '360', label: 'Personas impactadas' },
    ],
    tags: ['Aprendizaje móvil', 'Multi-distribuidor', 'Consumo masivo'],
  },
]

const testimonials: { quote: string; name: string; company: string }[] = []

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
                    fontFamily: 'var(--font-sans), Helvetica Neue, sans-serif',
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
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--magma-red)',
                      marginBottom: 10,
                    }}
                  >
                    Programa {c.program}
                  </p>
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
                          fontFamily: 'var(--font-sans), Helvetica Neue, sans-serif',
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
      {testimonials.length > 0 && (
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
      )}

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
