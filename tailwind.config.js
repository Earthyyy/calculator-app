/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    },
    extend: {
      textColor: {
        header: 'var(--color-text-header-display)',
        key: {
          primary: 'var(--color-text-key-primary)',
          secondary: 'var(--color-text-key-secondary)',
          tertiary: 'var(--color-text-key-tertiary)',
        }
      },
      backgroundColor: {
        main: 'var(--color-main-background)',
        toggle: 'var(--color-toggle-background)',
        screen: 'var(--color-screen-background)',
        key: {
          primary: {
            bg: 'var(--color-key-background)',
            shadow: 'var(--color-key-shadow)',
          },
          secondary: {
            bg: 'var(--color-key-background-secondary)',
            shadow: 'var(--color-key-shadow-secondary)',

          },
          tertiary: {
            bg: 'var(--color-key-background-tertiary)',
            shadow: 'var(--color-key-shadow-tertiary)',
          },

        }
      },
    }
  },
  plugins: [],
}