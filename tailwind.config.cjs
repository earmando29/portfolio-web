/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
      extend: {
        fontFamily: {
          inter: ['inter', 'serif'],
        },
        colors: {
          'soft-white':'#FFF5EC',
        }
      },
  },
  plugins: [],
}
