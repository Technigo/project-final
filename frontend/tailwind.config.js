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
        'link-color': 'var(--link-color)',
        'link-hover-color': 'var(--link-hover-color)',
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["STIX Two Text", "serif"],
      },
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
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.quotation': {
          position: 'relative',
          padding: '1rem',
          '&:before, &:after': {
            fontSize: '4rem',
            color: 'gray',
            position: 'absolute',
            zIndex: 2,
          },
          '&:before': {
            top: '-10px',
            left: '-10px',
            content: '"“"',
          },
          '&:after': {
            bottom: '-10px',
            right: '-10px',
            content: '"”"',
          }
        },
        '.note': {
          position: 'relative',
          backgroundColor: '#D8BFAF',
          padding: '1rem',
          margin: '1rem',
          borderRadius: '0.25rem',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
          width: '250px',
          height: '300px',
          '&:hover': {
            transform: 'scale(1.07)',
            transition: 'transform 0.3s ease-in-out',
          },
        },
      });
    },
  ],
};
