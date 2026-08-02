/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1f66",
          dark: "#0a1f66",
          light: "#3d5a9c",
          mid: "#5b7bb8",
        },
        gold: {
          DEFAULT: "#f5c518",
          dark: "#e0b000",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          lg: "1200px",
          xl: "1300px",
        },
      },
    },
  },
  plugins: [],
};