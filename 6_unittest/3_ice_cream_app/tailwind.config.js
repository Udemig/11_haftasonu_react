/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // varsayılan fontu poppins olarak ayarladık
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    // genişlet: yeni font - renk ekle
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
