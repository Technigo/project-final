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
    extend: {
      backgroundImage: {
        health:
          "url('https://res.cloudinary.com/ddpsnaef5/image/upload/f_webp,fl_awebp,q_auto/v1717588806/mockups/ta9gbwyxaaqeekzcroya')",
        business:
          "url('https://res.cloudinary.com/ddpsnaef5/image/upload/v1717589290/mockups/upjlenilirfukk6k3nrs.webp')",
        color:
          "url('https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588974/mockups/tlsk4tsiin3uesyr094k.webp')",
        travel:
          "url('https://res.cloudinary.com/ddpsnaef5/image/upload/v1717588831/mockups/u2xtb6q0aedxthqn2d88.webp')",
      },
    },
  },
  plugins: [],
});
