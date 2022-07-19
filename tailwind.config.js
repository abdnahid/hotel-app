/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      dark: {
        light: '#203239',
        DEFAULT: '#141E27',
      },
      theme: {
        light: '#ff9c9f',
        DEFAULT: '#ff5a5f',
        dark: '#802d30',
      },
      bodyBg: '#EFFFFD',
      gradstart: 'rgb(230, 30, 77)',
      gradend: 'rgb(215, 4, 102)',
      success: '#76BA99',
      error: '#FD5D5D',
      transparent: 'rbba(255,255,255,0)',
    },
    extend: {},
  },
  plugins: [],
};
