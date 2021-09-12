module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: {
        DEFAULT: '#FFA96B'
      },
      blue: {
        DEFAULT: '#51A1FF'
      },
      red: {
        DEFAULT: '#EF4444'
      },
      yellow: {
        DEFAULT: '#FBBF24'
      },
      purple: {
        DEFAULT: '#8B5CF6'
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
