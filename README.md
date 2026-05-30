# Magma — Web Site

Sitio web B2B para Magma: tecnología y audiovisual para equipos comerciales más capaces.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS + CSS custom properties
- **Tipografía**: Pragmatica (ver instrucciones abajo)
- **Deploy**: Vercel

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── globals.css         # Design system: variables, tipografía, animaciones
│   ├── page.tsx            # Home
│   ├── servicios/
│   │   └── page.tsx        # Página de servicios
│   ├── casos/
│   │   └── page.tsx        # Casos de éxito
│   └── contacto/
│       └── page.tsx        # Contacto (formulario)
├── components/
│   ├── Nav.tsx             # Navegación fija con scroll detection
│   └── Footer.tsx          # Footer con ticker animado
public/
└── fonts/                  # ← Coloca aquí los archivos de Pragmatica
    ├── Pragmatica-Book.woff2
    ├── Pragmatica-Medium.woff2
    └── Pragmatica-Bold.woff2
```

## Setup local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm run start
```

## Tipografía: Pragmatica

Pragmatica es una fuente comercial. Coloca los archivos `.woff2` y `.woff` en `/public/fonts/` con estos nombres exactos:

- `Pragmatica-Book.woff2` (weight 400)
- `Pragmatica-Medium.woff2` (weight 500)
- `Pragmatica-Bold.woff2` (weight 700)

Sin los archivos, el sitio usa `Helvetica Neue` como fallback —  funcional pero no óptimo.

## Deploy en Vercel

1. Sube el repo a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Vercel detecta Next.js automáticamente
4. Deploy en un clic

## Variables de entorno

Actualmente ninguna. Cuando conectes el formulario de contacto (Formspree, HubSpot, etc.), añade las keys en `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=...
```

## Formulario de contacto

El formulario en `/contacto` está listo visualmente. Para conectarlo a un backend:

- **Formspree**: cambia el `handleSubmit` para hacer POST a `https://formspree.io/f/TU_ID`
- **HubSpot**: usa la HubSpot Forms API
- **Custom**: cualquier endpoint REST

## Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--magma-black` | `#080807` | Fondo principal |
| `--magma-amber` | `#E8960C` | Acento primario |
| `--magma-red` | `#C0281C` | Acento secundario |
| `--magma-bone` | `#E2D8C8` | Texto principal |

## Añadir las fuentes reales de Magma

Si tienes un logo en SVG o assets de marca, colócalos en `/public/` y actualiza el componente `Nav.tsx` (función `MagmaLogo`).
