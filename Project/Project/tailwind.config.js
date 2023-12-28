/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ['Noto Sans KR', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif', 'Noto Sans JP', 'Narnoor'],
        Poplin:['Montserrat', 'sans-serif'],
        BeVietnam:['BeVietnam-Bold']
      
      },
     
    },

  },
  plugins: [],
}