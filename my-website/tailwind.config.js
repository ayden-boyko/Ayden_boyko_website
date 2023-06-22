/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "load-right": {
          "0%": { transform: "translate-y-full" },
          "100%": { transform: "translate-y-0" },
        },
        "load-left": {
          "0%": { transform: "translate-y-0" },
          "100%": { transform: "translate-y-full" },
        },
      },
      animation: {
        "load-right": "load-right 3s linear 1",
        "load-left": "load-left 3s linear 1",
      },
    },
  },
  plugins: [],
};
