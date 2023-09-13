/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#EBE76C",
        bgColor: "#ED7B7B",
      },
      backgroundColor: {
        textColor: "#EBE76C",
        bgColor: "#ED7B7B",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
