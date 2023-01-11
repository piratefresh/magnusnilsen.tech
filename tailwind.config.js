const { theme } = require('@sanity/demo/tailwind')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    maxWidth: {
      ...defaultTheme.maxWidth,
      400: '400px',
      370: '370px',
      180: '180px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.bg-main': {
          position: 'relative',
          background: '#0F2124',

          '&::before': {
            content: "''",
            display: 'block',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            background:
              'url("https://res.cloudinary.com/film-it/image/upload/v1648261306/The%20inn/concrete-stylized.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            mixBlendMode: 'screen',
            opacity: 0.12,
          },
        },
        '.border-brandGradient': {
          border: '3px solid transparent',
          backgroundImage:
            'linear-gradient(#181818, #181818),linear-gradient(90deg, #F97794, #623AA2)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
      })
    }),
  ],
}
