/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#8EC1D6",
        dark: "#3D4B5F",
        mid: "#CBD5E1",
        light: "#F8FAFC"
      },
    },
  },
  plugins: [],
}