import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New'],
      },
      letterSpacing: { architect: '0.22em' },
      colors: {
        ink: { 950: '#050505', 900: '#0b0b0f', 800: '#12121a' },
        line: { dark: 'rgba(255,255,255,0.10)', light: 'rgba(2,6,23,0.10)' },
        panel: {
          dark: 'rgba(255,255,255,0.06)',
          light: 'rgba(2,6,23,0.03)',
          borderDark: 'rgba(255,255,255,0.12)',
          borderLight: 'rgba(2,6,23,0.10)',
        },
        glow: { blue: '#2563eb', purple: '#7c3aed', cyan: '#06b6d4' },
        brand: { 600: '#2563eb', 700: '#1d4ed8' },
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.06) inset, 0 18px 60px rgba(0,0,0,0.45)',
      },
      backdropBlur: { glass: '14px' },
      typography: {
        invert: {
          css: {
            color: 'rgba(226,232,240,0.92)',
            a: { color: '#93c5fd', '&:hover': { color: '#bfdbfe' } },
            code: { color: '#e2e8f0', backgroundColor: 'rgba(255,255,255,0.06)' },
            h1: { color: '#fff' },
            h2: { color: '#fff' },
            h3: { color: '#fff' },
            strong: { color: '#fff' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config
