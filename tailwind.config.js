/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: {
          DEFAULT: '#0B1224',
          subtle: '#0F1A34',
          elevated: '#142247',
          card: '#0d182e',
          border: 'rgba(56, 189, 248, 0.15)',
        },
        primary: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
          glow: 'rgba(56, 189, 248, 0.35)',
        },
        secondary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        accent: {
          DEFAULT: '#A78BFA',
          hover: '#8B5CF6',
          glow: 'rgba(167, 139, 250, 0.35)',
        },
        emerald: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.35)',
        },
        text: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(56, 189, 248, 0.25)',
        'glow-secondary': '0 0 30px rgba(99, 102, 241, 0.25)',
        'glow-accent': '0 0 30px rgba(167, 139, 250, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
