'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

const reasons = [
  'Diagnóstico comercial',
  'Producción de fórmulas',
  'Plataforma y tecnología',
  'Propuesta completa',
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    team: '',
    reason: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: connect to your form backend (Formspree, HubSpot, etc.)
    setSubmitted(true)
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === name ? 'var(--magma-amber)' : 'var(--stroke-bright)'}`,
    padding: '14px 0',
    color: 'var(--magma-bone)',
    fontFamily: 'Pragmatica, Helvetica Neue, sans-serif',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 200ms ease',
    appearance: 'none' as const,
    WebkitAppearance: 'none' as const,
  })

  const labelStyle = {
    fontSize: '0.6875rem',
    fontWeight: 500,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--magma-bone-dim)',
    display: 'block',
    marginBottom: 4,
  }

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
            inset: 0,
            background: 'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(192,40,28,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container-magma" style={{ position: 'relative', zIndex: 1 }}>
          <p className="t-kicker" style={{ marginBottom: 24 }}>Contacto</p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.97,
              color: 'var(--magma-bone)',
              maxWidth: '14ch',
            }}
          >
            Hablemos de<br />
            tu equipo.
          </h1>
        </div>
      </section>

      {/* ── MAIN SECTION ────────────────────── */}
      <section
        className="section"
        style={{ background: 'var(--magma-black)' }}
      >
        <div className="container-magma">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              gap: 'clamp(60px, 8vw, 120px)',
              alignItems: 'start',
            }}
          >
            {/* Left: info */}
            <div>
              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: 'var(--magma-bone-dim)',
                  marginBottom: 56,
                  maxWidth: '38ch',
                }}
              >
                La primera sesión es gratuita. Analizamos tu proceso de venta,
                identificamos las brechas clave y te mostramos exactamente cómo Magma
                puede impactar tus resultados.
              </p>

              {/* Contact info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div>
                  <p className="t-label" style={{ marginBottom: 8 }}>Email</p>
                  <a
                    href="mailto:hola@magma.co"
                    style={{
                      fontSize: '1rem',
                      color: 'var(--magma-bone)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--magma-amber)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--magma-bone)')}
                  >
                    hola@magma.co
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </a>
                </div>

                <div>
                  <p className="t-label" style={{ marginBottom: 8 }}>LinkedIn</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '1rem',
                      color: 'var(--magma-bone)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--magma-amber)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--magma-bone)')}
                  >
                    /company/magma
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </a>
                </div>

                {/* Status */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 20px',
                    border: '1px solid var(--stroke)',
                    marginTop: 8,
                  }}
                >
                  <span
                    className="animate-pulse-amber"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--magma-amber)',
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: '0.875rem', color: 'var(--magma-bone-dim)' }}>
                    Disponibles para nuevos proyectos en{' '}
                    <span style={{ color: 'var(--magma-bone)', fontWeight: 500 }}>
                      Q3 2025
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    padding: 'clamp(48px, 8vw, 80px)',
                    border: '1px solid var(--stroke)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      border: '2px solid var(--magma-amber)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 32px',
                    }}
                  >
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M1 8L7 14L19 2" stroke="var(--magma-amber)" strokeWidth="2" strokeLinecap="square" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--magma-bone)',
                      marginBottom: 16,
                    }}
                  >
                    Mensaje recibido.
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'var(--magma-bone-dim)', lineHeight: 1.6 }}>
                    Nos pondremos en contacto en menos de 24 horas para coordinar la sesión de diagnóstico.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0 32px',
                    }}
                  >
                    <div style={{ marginBottom: 40 }}>
                      <label htmlFor="name" style={labelStyle}>Nombre</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle('name'),
                          '::placeholder': { color: 'var(--magma-grey)' },
                        } as React.CSSProperties}
                      />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                      <label htmlFor="email" style={labelStyle}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0 32px',
                    }}
                  >
                    <div style={{ marginBottom: 40 }}>
                      <label htmlFor="company" style={labelStyle}>Empresa</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Nombre de la empresa"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        style={inputStyle('company')}
                      />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                      <label htmlFor="team" style={labelStyle}>Tamaño del equipo comercial</label>
                      <select
                        id="team"
                        name="team"
                        value={formData.team}
                        onChange={handleChange}
                        onFocus={() => setFocused('team')}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle('team'),
                          cursor: 'pointer',
                          color: formData.team ? 'var(--magma-bone)' : 'var(--magma-grey)',
                        }}
                      >
                        <option value="" disabled>Selecciona</option>
                        <option value="1-5">1 – 5 vendedores</option>
                        <option value="6-20">6 – 20 vendedores</option>
                        <option value="21-50">21 – 50 vendedores</option>
                        <option value="50+">Más de 50</option>
                      </select>
                    </div>
                  </div>

                  {/* Reason */}
                  <div style={{ marginBottom: 40 }}>
                    <label style={labelStyle}>Me interesa principalmente</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 10 }}>
                      {reasons.map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, reason: r }))}
                          style={{
                            padding: '8px 16px',
                            border: `1px solid ${formData.reason === r ? 'var(--magma-amber)' : 'var(--stroke-bright)'}`,
                            background: formData.reason === r ? 'rgba(232,150,12,0.08)' : 'transparent',
                            color: formData.reason === r ? 'var(--magma-amber)' : 'var(--magma-bone-dim)',
                            fontFamily: 'Pragmatica, Helvetica Neue, sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 200ms ease',
                          }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 48 }}>
                    <label htmlFor="message" style={labelStyle}>
                      Cuéntanos el contexto (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="¿Cuál es el principal reto de tu equipo comercial hoy?"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle('message'),
                        resize: 'none',
                        borderBottom: 'none',
                        border: `1px solid ${focused === 'message' ? 'var(--magma-amber)' : 'var(--stroke-bright)'}`,
                        padding: 16,
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Enviar y agendar sesión
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </button>

                  <p
                    style={{
                      marginTop: 16,
                      fontSize: '0.75rem',
                      color: 'var(--magma-grey)',
                      textAlign: 'center',
                    }}
                  >
                    Sin spam. Te respondemos en menos de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder input color */}
      <style>{`
        input::placeholder,
        textarea::placeholder,
        select option[disabled] {
          color: var(--magma-grey);
          opacity: 1;
        }
        select option {
          background: var(--magma-deep);
          color: var(--magma-bone);
        }
      `}</style>
    </>
  )
}
