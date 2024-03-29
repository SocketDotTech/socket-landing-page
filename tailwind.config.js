module.exports = {
  purge: ["./src/***/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        "socket-theme": "#7F1FFF",
        "socket-theme-light": "#F7F1FE",
        "socket-gray": {
          40: "#D0D5DD",
          70: "#475467",
          80: "#344054",
          90: "#1D2939",
          100: "#101828",
        },
      },
    },
  },
  plugins: [],
};
