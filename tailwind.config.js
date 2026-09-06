/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#0E2B25',
        gray: {
          50: '#F7F4ED',
          100: '#E5E1D8',
          200: '#E5E1D8',
          300: '#CFCAC0',
          400: '#69756F',
          500: '#69756F',
          600: '#4E5C55',
          700: '#35453F',
          800: '#0E2B25',
          900: '#1C2421',
          950: '#1C2421',
        },
        emerald: {
          400: '#C9A55C',
          500: '#173F35',
          600: '#173F35',
          700: '#173F35',
          800: '#0E2B25',
          900: '#0E2B25',
        },
        lime: {
          100: '#F7F4ED',
          200: '#E5E1D8',
          300: '#D8C38B',
          400: '#C9A55C',
          500: '#B68F42',
          600: '#8F6C2D',
          700: '#69756F',
        },
      },
    },
  },
  plugins: [],
}