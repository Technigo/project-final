/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      blue: "#3D52A0",
      "light-blue": "#ADBBDA",
      "light-gray": "#EDE8F5",
      red: "#F78888",
      "button-blue": "#4B5DFF",
      "button-hover": "#031CFF",
      "button-disabled": "#475989",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
});
