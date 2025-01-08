/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/bg.png')",
      },
      screens:{
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      }
    },
  },
  plugins: [],
}

