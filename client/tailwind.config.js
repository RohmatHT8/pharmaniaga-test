/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorOne:'#e9f3ff',
        colorTwo:'#b5dbff'
      },
      fontFamily:{
        Nunito:'Nunito'
      }
    },
  },
  plugins: [],
}
