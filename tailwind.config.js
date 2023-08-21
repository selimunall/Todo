/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray1: {
          100: "#F4F4F4",
          200: "#EBEBEB",
          300: "#7C7C7C",
          400: "#444444",
        },
        "todo-purple": {
          100: "#FF6B6B",
        },
        list: {
          red: "#FF6B6B",
          pink: "#DA77F2",
          purple: "#9775FA",
          blue: "#5C7CFA",
          turquoise: "#66D9E8",
          green: "#8CE99A",
          yellow: "#FFD43B",
          orange: "#FF922B",
        },
      },
    },
  },
  plugins: [],
};
