module.exports = {
  important: true,
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#131419',
          900: '#1C1C24',
        },
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
};
