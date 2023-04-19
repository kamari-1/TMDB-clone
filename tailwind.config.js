/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: "rgb(3,37,65)",
        tmdbLightBlue: "rgb(1,180,228)",
        tmdbLightGreen: "rgb(30,213,169)",
      },
      backgroundImage: {
        banner:
          'linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg")',
        SearchButton:
          "linear-gradient(to right, rgba(30,213,169, 1) 0%, rgba(1,180,228, 1) 100%)",
      },
    },
  },
  plugins: [],
};
