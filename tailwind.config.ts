import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Google-inspired base colors - refined and premium
        accent: {
          red: '#d33025',    // Google Red - muted and refined
          blue: '#1967d2',   // Google Blue - deep and sophisticated
          green: '#0d9488',  // Emerald Green - elegant
          yellow: '#f9ab00', // Soft golden yellow - warm accent
          purple: '#6f42c1', // Rich purple - for secondary accents
        },
        surface: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          850: '#2d2d2d',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        // Premium dark theme - charcoal to black
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Refined gradient accents - minimal and elegant
        'gradient-accent': 'linear-gradient(135deg, #1967d2 0%, #0d9488 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f9ab00 0%, #d33025 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'fade-in-left': 'fadeInLeft 0.7s ease-out',
        'fade-in-right': 'fadeInRight 0.7s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      spacing: {
        // Enhanced spacing for editorial layouts
        'section': '6rem',
        'section-lg': '8rem',
        'section-sm': '4rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Enhanced typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
      },
      boxShadow: {
        // Refined, minimal shadows
        'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow': '0 0 30px rgba(25, 103, 210, 0.2)',
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.glass': {
          '@apply backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg': {},
        },
        '.glass-md': {
          '@apply backdrop-blur-lg bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg': {},
        },
        '.hover-glow': {
          '@apply hover:shadow-glow transition-all duration-300': {},
        },
        '.gradient-text': {
          '@apply bg-gradient-accent bg-clip-text text-transparent': {},
        },
        '.editorial-grid': {
          '@apply grid grid-cols-1 md:grid-cols-2 gap-8 items-start': {},
        },
        '.premium-border': {
          '@apply border border-white border-opacity-10': {},
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
