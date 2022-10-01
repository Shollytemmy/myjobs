/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        ofWhite: 'hsla(0, 0%, 92%, 1)',
        hPrimary: 'hsla(186, 100%, 25%, 1)',
        main: 'hsla(0, 0%, 90%, 1)',
        icons: 'rgba(255, 255, 255, 0.2)',
        greyLighter: 'hsla(0, 0%, 15%, 1)',
        greyLight:'hsla(0, 0%, 26%, 1)',
        brownish: "#666666",
        //background: hsla(0, 0%, 40%, 1);


      },
      backgroundImage:{
          hero: "url('./src/Components/Atoms/Images/header-logo.png')"
        }
    },
    fontFamily:{
      'heading': ['Poppins','Montserrat'],
      tableH: 'Inter'
    }
  },
  plugins: [],
}




