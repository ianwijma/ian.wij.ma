module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red': '#ff0000',
        'yellow': '#ffff00',
        'lightblue': '#00ffff',
        'blue': '#0000ff',
        'magenta': '#ff00ff',
        'white': '#ffffff',
        'black': '#000000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
