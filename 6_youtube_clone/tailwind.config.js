/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // tailwind renk paletini genişletip:
      colors: {
        // kendi rengimizi ekliyoruz
        gri: "#272727",
      },

      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
