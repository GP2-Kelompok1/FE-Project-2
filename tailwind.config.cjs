const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'alta-dark': '#17345f',
        'alta-light': '#f4f7fb',
        'alta-white': '#ffffff',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
});
