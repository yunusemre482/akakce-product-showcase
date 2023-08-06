import type { Config } from 'tailwindcss'


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      gridAutoColumns: {
        'minmax-0': 'minmax(0, 1fr)',
        'vertical': 'minmax(300px, 1fr)',
      },
      colors: {
        'p-primary': {
          DEFAULT: '#627285',
          100: '#e6e9f0',
          200: '#c0c7d9',
          300: '#9aa4c2',
          400: '#748daa',
          500: '#8d9fc4',
          600: '#3a6acb'
        },
        'p-price': {
          DEFAULT: '#333333',
          100: '#e6e9f0',
          200: '#c0c7d9',
          300: '#9aa4c2',
          400: '#748daa',
          500: '#8d9fc4',
          600: '#3a6acb'

        }

      }
    },
  },
  plugins: [],
} satisfies Config

