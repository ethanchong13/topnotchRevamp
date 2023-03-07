/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'topnotch-blue':'#1c325d',
        'topnotch-yellow':'#ad7028',
        'topnotch-grey':'#545454'
      }
    },
  },
  plugins: [],
}
