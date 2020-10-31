module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'body': ['Piazzolla']
    },
    extend: {
      width: {
        '30r': '30rem'
      },
      spacing: {
        '9': '2.25rem',
        '14': '3.5rem',
        '30r': '30rem',
        '47.5': '47.5rem'
      },
      borderRadius: {
        'xl': '0.75rem'
      },
      inset: {
        '1/2': '50%',
      },
      translate: {
        '-1/2': '-50%'
      },
      colors: {
        primary: {
          darker: '#1B0D42',
          dark: '#1A0652',
          default: '#32187C'
        },
        secondary: '#CD6EF0'
      }
    },
  },
  variants: {
    display: ['responsive', 'hover', 'group-hover'],

  },
  plugins: [],
}
