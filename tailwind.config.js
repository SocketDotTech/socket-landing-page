module.exports = {
  purge: ["./src/***/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'oc-theme-primary': '#7F1FFF',
        'oc-theme-primary-dark': '#5F00D2',
        'oc-dark': '#1E1A20',
        'oc-dark-opacity-0': '#2A263000',
      },
    },
  },
  plugins: [],
}
