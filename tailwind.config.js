/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'], // Yangi shrift oilasini qo'shish
      },
      container:{
        center:true,
        screens:{
          lg:"1200px"
        }
      }
    },
  },
  plugins: [],
}
