/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ['REM']
    },
    extend: {
      colors: {
        todo_primary: {
            0: 'var(--slm-primary)',
          100: 'var(--slm-primary-100)',
          200: 'var(--slm-primary-200)',
          300: 'var(--slm-primary-300)',
          400: 'var(--slm-primary-400)',
          500: 'var(--slm-primary-500)',
          600: 'var(--slm-primary-600)',
          700: 'var(--slm-primary-700)',
          800: 'var(--slm-primary-800)',
          900: 'var(--slm-primary-900)',
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
