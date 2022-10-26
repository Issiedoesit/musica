/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
],
  theme: {
    extend: {
      fontFamily: {
        'Quicksand': ['"Quicksand"', 'sans-serif'],
      },
      colors:{
        'dark-blue': '#1D2123',
        'dark-blue-alt': '#1A1E1F',
        'teal': '#609EAF',
        'sec-yellow': '#FACD66',
      },
      borderWidth:{
        '0.25': '0.5px',
        '0.5': '1px',
      },
      dropShadow: {
        'player': '0 -25px 100px rgba(16, 16, 16, 0.51)',
      },
    },
  },
  plugins: [],
}