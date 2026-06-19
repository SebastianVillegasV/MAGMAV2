'use client'

import Link from 'next/link'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--stroke)',
        paddingBlock: 'clamp(48px, 8vw, 80px)',
        background: 'var(--magma-black)',
      }}
    >
      <div className="container-magma">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'start',
            gap: 40,
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/wordmark.svg"
              alt="Magma"
              style={{ height: 'clamp(28px, 5vw, 44px)', width: 'auto', display: 'block', marginBottom: 20 }}
            />
            <p
              style={{
                maxWidth: 360,
                fontSize: '0.9375rem',
                lineHeight: 1.65,
                color: 'var(--magma-bone-dim)',
              }}
            >
              Equipos más capaces cada día.
            </p>
          </div>

          {/* Nav columns */}
          <div
            style={{
              display: 'flex',
              gap: 'clamp(32px, 5vw, 80px)',
            }}
          >
            <FooterCol
              title="Sitio"
              links={[
                { href: '/',          label: 'Inicio' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/casos',     label: 'Casos' },
                { href: '/contacto',  label: 'Contacto' },
              ]}
            />
            <FooterCol
              title="Contacto"
              links={[
                { href: 'mailto:sara@magma.com', label: 'sara@magma.com' },
                { href: 'https://linkedin.com', label: 'LinkedIn' },
              ]}
            />
          </div>
        </div>

        {/* Ticker */}
        <div
          style={{
            overflow: 'hidden',
            borderTop: '1px solid var(--stroke)',
            borderBottom: '1px solid var(--stroke)',
            paddingBlock: 14,
            marginBottom: 'clamp(32px, 5vw, 48px)',
          }}
        >
          <div
            className="animate-ticker"
            style={{
              display: 'flex',
              gap: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {[...Array(2)].map((_, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--magma-bone-dim)',
                  paddingRight: 60,
                }}
              >
                {['Equipos Imparables', 'Historias que Enseñan', 'Método Propio', 'Aprendizaje Inteligente', 'Resultados Reales', 'Conocimiento en Acción'].map((item, i) => (
                  <span key={i}>
                    {item}
                    <span style={{ color: 'var(--magma-amber)', margin: '0 20px' }}>—</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span className="t-label" style={{ color: 'var(--magma-grey)' }}>
            © {year} Magma. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span
              className="animate-pulse-amber"
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--magma-amber)',
              }}
            />
            <span className="t-label" style={{ color: 'var(--magma-grey)' }}>
              Disponibles para nuevos proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <p
        style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--magma-amber)',
          marginBottom: 20,
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={{
                fontSize: '0.875rem',
                color: 'var(--magma-bone-dim)',
                textDecoration: 'none',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'var(--magma-bone)'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'var(--magma-bone-dim)'
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
