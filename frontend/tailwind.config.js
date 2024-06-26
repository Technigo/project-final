/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cta-blue": "#002795",
        "cta-blue-hover": "#1138a6",

        "main-green2": "#86884b",
        "main-green": "rgb(116, 118, 57)", //testing new main-green color for accessibility. We get a 96 on the homepage with this

        "main-yellow-check": "#FFE486",
        "strong-yellow": "rgba(255, 215, 51, 0.8)",
        "main-yellow": "#FFDE68",

        "main-white": "#FFFDF6",
        "main-white-transparent": "rgba(255, 253, 246, 0.7)",

        "main-red2": "#E48d6A",
        "main-red": "rgb(211, 124, 89)", //testing a new main-red color for accessibility. We get a 96 on the homepage with this
        "strong-red": "rgba(159, 36, 9, 0.41)",
        "red-burger": "rgba(193, 96, 65, 0.8)",
        "strong-red2": "#9f2409",
        "strong-green": "#475318",

        "light-yellow": "#FFE486",
        "light-orange": "#FF8E61",

        "text-light": "#fff",
        "text-dark": "#671E01",

        "button-light": "#FFF5F2",
        "button-varm-light": "#FFCDBD",
        "button-varm-medium": "#D97D61",

        overlay: "rgba(25, 4, 5, 0.54)",
        "bg-input": "#FFFDF6",
        login: "rgba(255, 204, 182, 0.8)",
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
      backgroundImage: {
        "arrow-select": `url("/icons/arrowselect.svg")`,
      },
    },
  },
  plugins: [],
};
