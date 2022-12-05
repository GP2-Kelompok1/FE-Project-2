/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-dark": "#17345F",
      "bg-light": "#F4F7FB",
      "bg-white": "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
