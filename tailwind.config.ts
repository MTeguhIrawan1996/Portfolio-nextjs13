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
        slide: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '90%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInfinite: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-300%)' },
        },
        rightInfinite: {
          '0%': { transform: 'translateX(-150px)' },
          '100%': { transform: 'translateX(150px)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'right-infinite': 'rightInfinite 2s linear infinite',
        'slide-card': 'slide 3s 3s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-infinite': 'slideInfinite 100s linear infinite',
        'rain-arrow': 'rainArrow 1s ease-out infinite',
        'enter-left': 'enterLeft 0.5s ease-in-out',
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
    darkTheme: 'dark',
  },
};
export default config;
