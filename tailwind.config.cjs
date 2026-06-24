/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#152331",
        secondary: "#aaa6c3",
        tertiary: "#1c2a3b",
        "black-100": "#11202e",
        "black-200": "#0a141d",
        "white-100": "#f3f3f3",
        "french-rose": {
          50: "#fef1f6",
          100: "#fde6ef",
          200: "#fdcde0",
          300: "#fea3c5",
          400: "#fb5d94",
          500: "#f53f79",
          600: "#e51d53",
          700: "#c70f3b",
          800: "#a50f31",
          900: "#89122d",
          950: "#540315",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
