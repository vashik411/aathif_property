/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Geist'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        silkscreen: ["'Silkscreen'", 'cursive'],
      },
    },
  },
  plugins: [],
}