/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D1510A",
        secondary: "#923A06",
        accent: "#D8BFAF",
        light: "#F3E8E2",
        lighter: "#E0D1CB",
        dark: "#191818",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["STIX Two Text", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
