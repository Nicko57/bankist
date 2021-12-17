module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        encodeSans: ["Encode Sans Expanded", "sans-serif"],
      },
      screens: {
        sm: { min: "279px", max: "767px" },
        md: { min: "768px", max: "960px" },
        lg: { min: "960px", max: "1279px" },
        xl: { min: "1280px", max: "1400px" },
      },
      height: {
        97: "800px",
        21: "81px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
