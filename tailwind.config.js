/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#fafafa"
      },
      fontFamily: {
        opensans: ['OpenSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
