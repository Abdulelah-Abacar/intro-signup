/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'small': '0px 4px 0px 0px rgb(0, 0, 0, .3)',
      }
    },
    fontFamily: {
      Poppins: ['Poppins']
    }
  },
  plugins: [],
}
