/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'offwhite': '#FDFFD1',
      'indigo': '#00345C',
      'red': '#FF8282',
      'mint': '#9DCFBB',
      'green': '#B5D49F',
      'purple': '#BEA9D9',
      'plum': '#DBA2D2'
    },
  },
  plugins: [],
}

