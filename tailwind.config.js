/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
  theme: {
    extend: {},
    fontFamily: {
        'Poppins': ['poppins', 'sans-serif'],
      },
  },
  plugins: [],
}

