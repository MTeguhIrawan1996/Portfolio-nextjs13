import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Sora', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   // primary: {
      //   //   // Customize it on globals.css :root
      //   //   50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
      //   //   100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
      //   //   200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
      //   //   300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
      //   //   400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
      //   //   500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
      //   //   600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
      //   //   700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
      //   //   800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
      //   //   900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
      //   //   950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
      //   // },
      //   darkText: '#E4E6EB',
      //   // dark: '#121212',
      //   // light: '#fafafa',
      // },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#374151', // Cool Gray 700
          secondary: '#6b7280', // Cool Gray 500
          accent: '#f3f4f6', // Cool Gray 100
          'base-100': '#FFFFFF', // White
          '.sidebar': {
            'background-color': '#f3f4f6', // Cool Gray 100
            color: '#111827', // Cool Gray 900
          },
          '.status-dot': {
            'background-color': '#FFFFFF', // White
          },
        },
      },
      {
        dark: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#e5e7eb' /* gray-200 */,
          secondary: '#d1d5db' /* gray-300 */,
          accent: '#1f2937' /* gray-800 */,
          'base-100': '#1d232a',
          '.sidebar': {
            'background-color': '#1f2937' /* gray-800 */,
            color: '#d1d5db' /* gray-300 */,
          },
          '.status-dot': {
            'background-color': '#1d232a',
          },
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
};
export default config;
