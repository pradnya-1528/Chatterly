/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* slate-200/slate-700 */
        input: "var(--color-input)", /* white/slate-800 */
        ring: "var(--color-ring)", /* blue-600 */
        background: "var(--color-background)", /* white/slate-900 */
        foreground: "var(--color-foreground)", /* slate-800/slate-100 */
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* violet-600 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* slate-100/slate-700 */
          foreground: "var(--color-muted-foreground)", /* slate-500/slate-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* emerald-500 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white/slate-800 */
          foreground: "var(--color-popover-foreground)", /* slate-800/slate-100 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white/slate-800 */
          foreground: "var(--color-card-foreground)", /* slate-800/slate-100 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* emerald-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-600 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: "var(--color-surface)", /* slate-50/slate-800 */
        'text-primary': "var(--color-text-primary)", /* slate-800/slate-100 */
        'text-secondary': "var(--color-text-secondary)", /* slate-500/slate-400 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'cursor-blink': 'cursor-blink 1s infinite',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        'cursor-blink': {
          '0%, 50%': {
            opacity: '1',
          },
          '51%, 100%': {
            opacity: '0',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      cursor: {
        'study': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%232563EB\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M2 3h6l4 4 4-4h6v18H2z\'/%3E%3Cpath d=\'M10 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2\'/%3E%3C/svg%3E") 12 12, pointer',
        'brain': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237C3AED\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z\'/%3E%3Cpath d=\'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z\'/%3E%3C/svg%3E") 12 12, pointer',
        'chat': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2310B981\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\'/%3E%3C/svg%3E") 12 12, pointer',
        'calculator': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23059669\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect width=\'16\' height=\'20\' x=\'4\' y=\'2\' rx=\'2\'/%3E%3Cline x1=\'8\' x2=\'16\' y1=\'6\' y2=\'6\'/%3E%3Cline x1=\'16\' x2=\'16\' y1=\'14\' y2=\'18\'/%3E%3Cpath d=\'M16 10h.01\'/%3E%3Cpath d=\'M12 10h.01\'/%3E%3Cpath d=\'M8 10h.01\'/%3E%3Cpath d=\'M12 14h.01\'/%3E%3Cpath d=\'M8 14h.01\'/%3E%3Cpath d=\'M8 18h.01\'/%3E%3C/svg%3E") 12 12, pointer',
        'lightbulb': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23D97706\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M9 21h6\'/%3E%3Cpath d=\'M12 21V7a3 3 0 1 1 3 3v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-1a3 3 0 1 1 3-3z\'/%3E%3C/svg%3E") 12 12, pointer',
        'target': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23DC2626\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'6\'/%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'2\'/%3E%3C/svg%3E") 12 12, pointer',
        'sparkle': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'%23F59E0B\' stroke=\'%23F59E0B\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\'/%3E%3C/svg%3E") 12 12, pointer',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}