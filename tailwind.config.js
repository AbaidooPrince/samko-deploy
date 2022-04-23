module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    borderRadius: {
    'large': '140px'
    },
    extend: {
      colors: {
        samko: {
          primary: '#040DBF',
          secondary: '#F20505',
          high: '#0511F2',
          deep: '#03074e'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
