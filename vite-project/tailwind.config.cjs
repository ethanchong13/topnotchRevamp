/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'topnotch-blue':'#1c325d',
        'topnotch-yellow':'#ad7028',
        'topnotch-grey':'#545454'
      }
    },
  },
  plugins: [],
}
