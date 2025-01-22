/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './resources/js/src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
      },
      minHeight: {
        '550': '550px'
      },
      boxShadow: {
        cardShadow: '0px 9px 15px -2px rgba(97, 97, 97, 0.43)',
      },
    },
  },
  plugins: [],
}

