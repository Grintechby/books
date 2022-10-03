module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '320px',
      // => @media (min-width: 576px) { ... }

      'tablet': '768px',
      // => @media (min-width: 960px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}