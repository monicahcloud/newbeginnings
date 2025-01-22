/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("../public/croppedpurpleandgold.jpg")',
        donatebg: 'url("../public/donatebg.svg")',
        appbg: 'url("../public/appbg.svg")',
        blackOverlay:
          'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
      },
    },
  },
  plugins: [],
}

