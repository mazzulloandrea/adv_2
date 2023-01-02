/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveX: {
          "0%": { marginLeft: "0px" },
          "100%": { marginLeft: "calc(100% - 50px)" },
        },
      },
      animation: {
        "moveX-slow": "moveX 1.1s linear infinite alternate",
        "moveX-medium": "moveX 0.8s linear infinite alternate",
        "moveX-fast": "moveX 0.5s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
