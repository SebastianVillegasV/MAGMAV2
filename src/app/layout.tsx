import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

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
    <html lang="es">
      <body>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
