/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}