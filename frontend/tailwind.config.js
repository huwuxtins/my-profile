/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const darkMode = 'selector';
export const content = [
  "./node_modules/flowbite/**/*.js",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/tailwind-datepicker-react/dist/**/*.js",
];
export const theme = {
  extend: {
    colors: {
      ...colors,
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const variants = {};
export const plugins = [
  require('flowbite/plugin')
];
