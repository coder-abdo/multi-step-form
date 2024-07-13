/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
