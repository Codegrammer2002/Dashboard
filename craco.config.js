// craco.config.js
// this is file to configure the tailwind that we have setup in this project
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };