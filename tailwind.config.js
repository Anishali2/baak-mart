/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#02AFF3',
        'primary-light': '#02AFF3',
        danger: 'red',
        'light-background': 'rgb(2, 175, 243, 0.05)',
        secondary: '#C7C7CC',
        secondaryLight: 'rgba(255, 255, 255, 0.6)',
        main: '#26292D',
        inner: '#282B2F',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        transparentBg: 'rgba(255, 255, 255, 0.03)',
        lightblack: 'rgba(0, 0, 0, 0.643)',
        skeletonClr: '#a2a2a259'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace']
      },
      container: {
        center: true,
        padding: '1rem'
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        dxl: '1300px',
        xxl: '2000px'
      },
      maxWidth: {
        xxl: '2000px'
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        main: '1rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px'
      },
      boxShadow: {
        main: '2px 2px 20px 0px #ff343f',
        secondary: '2px 2px 20px 0px #a2a2a2'
      },
      scale: {
        10: '0.1',
        20: '0.2',
        35: '0.35',
        40: '0.4'
      }
    }
  },
  plugins: []
}
