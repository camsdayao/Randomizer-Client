/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ItimFont: ["Itim", "cursive"],
      },

      backgroundImage: (theme) => ({
        glass: "url('/src/assets/Glass.png')",
        wave: "url('/src/assets/Wave.png')",
        wrench: "url('/src/assets/wrench.png')",
      }),
    },
    colors: {
      gray: "#d9d9d9",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      pink: "#C67474",
      rock: "#5F5B5B",
      rocktext: "#B4A9A9",
      pop: "#C6BFBF",
    },

    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
