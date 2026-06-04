import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

// Brand typeface per MAGMA Brandbook 2026 — Poppins.
// Self-hosted by next/font (identical glyphs across browsers, full ES accents)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Magma — Equipos comerciales más capaces',
    template: '%s — Magma',
  },
  description:
    'Magma es la solución que combina tecnología y audiovisual para hacer equipos comerciales más capaces. Fórmulas conectadas a la operación real.',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Magma',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${jetbrains.variable}`}>
      <body>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
