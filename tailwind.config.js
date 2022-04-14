module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    borderRadius: {
    'large': '140px'
    },
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
