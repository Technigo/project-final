/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cta-blue": "#002795",
        "cta-blue-hover": "#1138a6",
        "main-green": "#97a65D",
        "main-yellow": "#FFDE68",
        "main-red": "#E48d6A",
        "strong-red": "rgba(159, 36, 9, 0.41)",
        "strong-green": "#475318",

        "text-light": "#fff",
        "text-dark": "#452626",

        "button-light": "#FFF5F2",

        "bg-input": "FFFDF6",
      },
      fontFamily: {
        body: ["Comfortaa", "cursive"],
        heading: ["Comfortaa", "sans-serif"],
      },
      screens: {
        tablet: "744px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1511px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
