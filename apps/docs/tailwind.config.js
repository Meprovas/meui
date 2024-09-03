/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

import MeUI from '@meprovas/meui';

export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,md}',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [MeUI],
};
