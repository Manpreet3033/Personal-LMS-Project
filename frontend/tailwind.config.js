/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-tint": "rgb(62, 1, 154)",
        "deep-blue": "#1B1A55",
        "light-yellow": "#f8ed62",
        "dark-yellow": "#FFDB58",
        "light-blue": "#c8d9ed",
        "light-blue-200": "#f4faff",
        "light-gray": "#DDDBD5",
      },
    },
    plugins: [],
  },
};
