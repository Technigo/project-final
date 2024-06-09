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
      /*  screens: {
         sm: '320px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
       }, */
      animation: {
        'flip-scale-down-ver': 'flip-scale-down-ver 0.5s linear both',
      },
      keyframes: {
        'flip-scale-down-ver': {
          '0%': { transform: 'scale(1) rotateY(0)' },
          '50%': { transform: 'scale(0.4) rotateY(-90deg)' },
          '100%': { transform: 'scale(1) rotateY(-180deg)' },
        },
      },
    },
  },
  plugins: [],
};
