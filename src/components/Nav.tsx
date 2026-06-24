'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos',     label: 'Casos' },
  { href: '/contacto',  label: 'Contacto' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 'clamp(12px, 1.8vw, 22px)',
          left: 'clamp(12px, 2.5vw, 32px)',
          right: 'clamp(12px, 2.5vw, 32px)',
          zIndex: 100,
          height: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(16px, 2vw, 28px)',
          borderRadius: 'clamp(14px, 1.4vw, 20px)',
          background: scrolled
            ? 'rgba(251,250,245,0.78)'
            : 'rgba(251,250,245,0.55)',
          backdropFilter: 'blur(18px) saturate(150%)',
          WebkitBackdropFilter: 'blur(18px) saturate(150%)',
          border: '1px solid rgba(42,40,32,0.08)',
          boxShadow: scrolled
            ? '0 10px 34px rgba(42,40,32,0.14)'
            : '0 6px 24px rgba(42,40,32,0.08)',
          transition: 'background 400ms var(--ease-in-out), box-shadow 400ms var(--ease-in-out)',
        }}
      >
        {/* Logo — imagotipo + wordmark (MAGMA Brandbook) */}
        <Link
          href="/"
          aria-label="Magma — inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/imagotipo.svg"
            alt=""
            aria-hidden="true"
            style={{ height: 30, width: 'auto', display: 'block' }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/wordmark.svg"
            alt="Magma"
            style={{ height: 15, width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Desktop links */}
        <div
          className="nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === link.href
                  ? 'var(--magma-amber)'
                  : 'var(--magma-bone-dim)',
                transition: 'color 200ms ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = 'var(--magma-bone)'
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = 'var(--magma-bone-dim)'
                }
              }}
            >
              {link.label}
              {pathname === link.href && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '100%',
                    height: 1,
                    background: 'var(--magma-amber)',
                  }}
                />
              )}
            </Link>
          ))}

          <Link href="/contacto" className="btn-primary" style={{ marginLeft: 16 }}>
            Hablemos
            <ArrowRight />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--magma-bone)',
            transition: 'transform 300ms ease, opacity 300ms ease',
            transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--magma-bone)',
            transition: 'opacity 200ms ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: 24, height: 1,
            background: 'var(--magma-bone)',
            transition: 'transform 300ms ease, opacity 300ms ease',
            transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 90,
          background: 'var(--magma-black)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'var(--gutter)',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 500ms var(--ease-out-expo)',
        }}
        className="mobile-menu"
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              color: pathname === link.href ? 'var(--magma-amber)' : 'var(--magma-bone)',
              display: 'block',
              paddingBlock: 12,
              borderBottom: '1px solid var(--stroke)',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 400ms ease ${i * 80 + 200}ms, transform 400ms var(--ease-out-expo) ${i * 80 + 200}ms`,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  )
}
