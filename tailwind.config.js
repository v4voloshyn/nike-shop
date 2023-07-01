/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /* black-100 - black-100  
      gray - black-200 
      gray-200 - gray-200 */
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        nike: ['Nike', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        'black-100': '#111111',
        'black-200': '#757575',
        'gray-100': '#f5f5f5',
        'gray-200': '#e5e5e5',
        'gray-300': '#7e7e7e',
      },
      boxShadow:{
        banner: 'inset 0 -1px 0 0 #e5e5e5'
      }
    },
  },
  plugins: [],
};
