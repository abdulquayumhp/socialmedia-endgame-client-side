/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: "#104e6b",
          secondary: "#000000",
          accent: "#3a4256",
          neutral: "#3a4256",
          "base-100": "#F0E130",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
