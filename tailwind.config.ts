import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '428px',
        '3xl': '1680px',
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        caveat: ["Caveat", "sans-serif"]
      },
      colors: {
        'primary-green': '#79BD8F',
        'white': '#ffffff',
        'gray': '#828282',
        'gray-dark': '#333333',
        'gray-light': '#F2F2F2'
      },
      fontSize: {
        'font-title': '110px',
        'font-small': '16px',
        'font-medium': '24px',
        'secondary-medium': '20px',
        'font-large': '48px',
        'secondary-large': '44px',
      },
      fontWeight: {
        'font-regular': '400',
        'font-bold': '700',
      },
      backgroundImage: {
        'form-img': "url('/heart.png')",
      }
    },
  },
  plugins: [],
}
export default config
