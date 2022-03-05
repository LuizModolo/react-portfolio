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
    screens: {
      'ssm': '430px',
      // => @media (min-width: 430px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
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
        'brush-orange': "url('./images/bg-brush-org-b.png')",
        'brush-yellow': "url('./images/bg-brush-yellow-t.png')",
        'btn-bg': "url('./images/btnBg2.png')",
      }
    },
  },
  plugins: [],
}
