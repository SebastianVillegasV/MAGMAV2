import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'magma-black':  '#080807',
        'magma-amber':  '#E8960C',
        'magma-red':    '#C0281C',
        'magma-bone':   '#E2D8C8',
        'magma-grey':   '#4A4A46',
        'magma-mid':    '#1A1A18',
      },
      fontFamily: {
        sans: ['Pragmatica', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Pragmatica Extended', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        'cinematic': '0.25em',
        'wide-xl': '0.15em',
      },
      animation: {
        'mask-reveal': 'maskReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ticker': 'ticker 20s linear infinite',
        'slow-pan': 'slowPan 30s ease-in-out infinite alternate',
        'pulse-amber': 'pulseAmber 3s ease-in-out infinite',
      },
      keyframes: {
        maskReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.05) translateX(-1%)' },
          '100%': { transform: 'scale(1.05) translateX(1%)' },
        },
        pulseAmber: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
export default config
