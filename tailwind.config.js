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
    },
  },
  plugins: [],
}

