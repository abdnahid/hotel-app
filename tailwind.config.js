/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#180A0A',
      theme: '#FF5A5F',
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
