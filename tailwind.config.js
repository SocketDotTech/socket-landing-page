module.exports = {
  purge: ["./src/***/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'oc-theme-primary': '#7F1FFF',
        'oc-theme-primary-dark': '#5F00D2',
        'oc-dark': '#17171F',
        'socket-theme': "#7F1FFF",
        'socket-gray': {
          70: '#475467',
          80: '#344054',
          90: '#1D2939',
        },
      },
    },
  },
  plugins: [],
}
