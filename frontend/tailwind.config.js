/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      'blue': '#3D52A0',
      'light-blue': '#ADBBDA',
      'light-gray': '#EDE8F5',
      'red': '#F78888',
      'button-blue': '#4B5DFF',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    extend: {
    },
  },
  plugins: [],
};
