// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* ══ Designsheet v3.4 "Clean Core" tokens ═══════════════════════
           Contract: treasures/designsheet-grellmann-app-v3.4.html §2/§9.
           AA-verified pairs only — run `node treasures/contrast-test.mjs`
           before licensing any new text/surface combination.             */

        // Accents (fixed since v1) — Tailwind-true fuchsia/cyan steps
        primary: {300: '#f0abfc', 400: '#e879f9'},
        accent: {300: '#67e8f9', 400: '#22d3ee'},

        // Ink — THE consolidated neutral scale (replaces gray/stone/neutral)
        ink: {
          400: '#9d9daa', // muted text (7.38:1 on ink-950)
          500: '#80808e', // meta/caption floor (5.08:1)
          700: '#26262e', // hairlines, giant display numerals
          800: '#17171c', // opaque card fallback (no-blur browsers)
          900: '#101014', // alternating section background
          950: '#0a0a0c', // canvas — the Apple-dark foundation
        },

        // Frost — text light (never a background)
        frost: {100: '#f5f5f7', 300: '#c9c9d3'},
      },
      fontSize: {
        // v3.4 big-contrast scale (§3) — 0.75rem stays the hard text floor
        'body-s': '0.875rem',
        body: ['1.0625rem', {lineHeight: '1.6'}],
        h3: '1.25rem',
        sub: ['1.5rem', {lineHeight: '1.45'}],
        h2: ['2.1rem', {letterSpacing: '-0.015em'}],
        h1: ['3rem', {letterSpacing: '-0.02em', lineHeight: '1.05'}],
        display: ['4.25rem', {letterSpacing: '-0.02em', lineHeight: '1.05'}],
      },
      transitionTimingFunction: {
        // v3.4 motion (§5/P8). `out` intentionally re-maps Tailwind's ease-out
        // to the spring-flavored v3 curve (ease-out is unused in v1 code).
        out: 'cubic-bezier(.22,1,.36,1)',
        glide: 'cubic-bezier(.32,.72,.28,1)',
      },
      boxShadow: {
        // Elevation (true black) + accent glows — §2/§5
        e1: '0 2px 8px rgba(0,0,0,.35)',
        e2: '0 8px 30px rgba(0,0,0,.45)',
        'glow-primary': '0 0 24px rgba(232,121,249,.22)',
        'glow-accent': '0 0 24px rgba(34,211,238,.25)',
        'glow-primary-lg':
          '0 0 36px rgba(232,121,249,.5),0 0 12px rgba(232,121,249,.35)',
        'glow-accent-lg':
          '0 0 36px rgba(34,211,238,.5),0 0 12px rgba(34,211,238,.35)',
      },
      backgroundImage: {
        // Aurora hairline — 1–2px underlines/rails ONLY, never a fill (§2)
        aurora: 'linear-gradient(100deg,#e879f9,#9d8cf5 50%,#22d3ee)',
      },
      keyframes: {
        // DEPRECATED (v1): typing/blink retire with the hero restyle
        // (refactoring step 4) — replaced by staggered Framer Motion reveal.
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: {
          raw: 'only screen and (pointer: coarse)'
        },
        // Set a breakpoint at 790, call it with: 'hidden tall-nav'
        'tall-nav': {
          'raw': '(min-height: 790px)'
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
