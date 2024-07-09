/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#E5E4E2',
      },
      fontFamily: {
        cartoon: ['"Patrick Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
}

