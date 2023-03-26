/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Metropolis", ...defaultTheme.fontFamily.sans],
      "serif": ["Poppins", ...defaultTheme.fontFamily.serif]
    },
    extend: {
      screens: {
        'lg': '1075px',
        'xl': '1335px',
      },
    },
  },
  plugins: [],
}