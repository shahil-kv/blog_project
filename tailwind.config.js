/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#D05270',
        'secondary-color': '#424242',
        'territory-color': '#3A0CA3',
        'twitter-color-btn': '#47acdf',
        'linkedin-color-btn': '#a2bdcd',
      },
      fontFamily: {
        'monsterrat': ['Montserrat', ' sans-serif']
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms',
      }
    },
  },
  plugins: [],
}
