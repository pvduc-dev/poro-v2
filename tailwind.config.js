const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
    },
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        body: {
          backgroundColor: '#201d3a',
          color: '#E5E7EB'
        }
      })
    })
  ],
}
