/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '340px',
      xs: '380px',
      '2xs': '500px',
      sm: '640px',
      md: '768px',
      lg: '1025px',
      '1lg': '1150px',
      '2lg': '1280px',
      xl: '1440px',
      xxl: '1920px',
    },

    extend: {},
  },
  plugins: [],
};
