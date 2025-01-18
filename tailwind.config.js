/** @type {import('tailwindcss').Config} */
light = require('./themes/light.js');
dark = require('./themes/dark.js');
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: light,
        dark: dark,
      }
    },
  },
  plugins: [],
}

