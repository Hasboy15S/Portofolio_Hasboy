/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:    '#0B1220',
        ice:    '#EAF3FC',
        accent: '#06B6D4',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans:    ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}