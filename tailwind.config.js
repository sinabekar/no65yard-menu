/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#57853D',
        primaryOrange: '#EC932D',
        primaryYellow: '#F9CB49',
        primaryDarkGreen: '#214120',
      },
    },
  },
  plugins: [],
}