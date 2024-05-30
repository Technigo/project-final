/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-blue": "#2330c5",
        "main-blue": "#2735db",
        "background-lavender": "#bb9cf0",
        "light-lavender": "#f5f0fd",
        "background-neon-green": "#effc7f",
        "text-light": "#fff",
        "text-dark": "#000",
      },
    },
  },
  plugins: [],
};
