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
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-h)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--gutter)',
          transition: 'background 600ms var(--ease-in-out), border-color 600ms var(--ease-in-out)',
          background: scrolled
            ? 'rgba(8,8,7,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--stroke)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <MagmaLogo />
          <span
            style={{
              fontFamily: 'Pragmatica, Helvetica Neue, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--magma-bone)',
              paddingTop: 1,
            }}
          >
            Magma
          </span>
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

function MagmaLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized M / lava flow form */}
      <rect width="28" height="28" fill="none" />
      <path
        d="M4 22 L4 8 L10 16 L14 10 L18 16 L24 8 L24 22"
        stroke="var(--magma-amber)"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <line
        x1="4" y1="22" x2="24" y2="22"
        stroke="var(--magma-red)"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M0 5H12M8 1L12 5L8 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  )
}
