/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1440px'
      }
    },
    colors: {
      white: '#ffffff',
      light: '#fafafa',
      dark: '#060e0e',
      foreground: '#060e0e',
      border: '#979aa4',
      input: '#161b1b',
      primary: {
        DEFAULT: '#36bcba',
        foreground: '#f8fafc'
      },
      secondary: {
        DEFAULT: '#1a1f1f',
        foreground: '#f8fafc'
      },
      destructive: {
        DEFAULT: '#f65606',
        foreground: '#fafafa'
      },
      muted: {
        DEFAULT: '#252A31',
        foreground: '#f8fafc'
      },
      accent: {
        DEFAULT: '#36bcba',
        foreground: '#f8fafc'
      },
      popover: {
        DEFAULT: '#f8fafc',
        foreground: '#060e0e'
      },
      card: {
        DEFAULT: '#1b1f1f',
        foreground: '#f8fafc'
      }
    },
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss']
}
