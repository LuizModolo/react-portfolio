module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'blue': '#021f30',
      'dark-blue': '#0b131c',
      'orange': '#fca311',
      'yellow': '#f4e409',
      'grey': '#aba9a9',
      'light-grey': '#e5e5e5',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        'brush-dark-t': "url('./images/bg-brush-t.png')",
        'brush-dark-b': "url('./images/bg-brush-b.png')",
        'brush-blue-t': "url('./images/bg-brush-blue-t.png')",
        'brush-blue-b': "url('./images/bg-brush-blue-b.png')",
      }
    },
  },
  plugins: [],
}
