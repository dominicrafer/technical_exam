/** @type {import('tailwindcss').Config} */
module.exports = {
  name: "tailwind-config",
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Bryant"'],
      },
      colors: {
        primary: "#333132",
        secondary: "#838295",
      },
    },
  },
  plugins: [],
};
