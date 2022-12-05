/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      "alta-dark": "#17345f",
      "alta-light": "#f4f7fb",
      "alta-white": "#ffffff"
    },
  },
  plugins: [require("daisyui")],
}
