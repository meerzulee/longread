module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'body': ['Piazzolla']
    },
    screens: {
      'big-desktop': {
        // <1800px
        min: '100.1em',
      },
      'desktop': {
        // <1600px
        max: '100em',
      },
      'laptop': {
        // <1440px
        max: '90em',
      },
      'laptop-mini': {
        // <1360px
        max: '85em',
      },
      'tablet': {
        // <1280px
        max: '80em',
      },
      'tablet-mini': {
        // <1000px
        max: '62.5em',
      }

    },
    extend: {
      width: {
        '30r': '30rem'
      },
      spacing: {
        '9': '2.25rem',
        '14': '3.5rem',

        '30r': '30rem',
        '47.5': '47.5rem',
        '360p': '360px'

      },
      borderRadius: {
        'xl': '0.75rem'
      },
      inset: {
        '1/2': '50%',
      },
      zIndex: {
        '-99': '-99'
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
    display: ['responsive', 'hover', 'group-hover', 'group-focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus']
  },
  plugins: [],
}
