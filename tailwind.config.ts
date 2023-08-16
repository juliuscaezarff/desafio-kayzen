import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red-primary': '#A81E1E',
        'blue-primary': '#223E66',
        'blue-primary-light': '#264673',
        'blue-primary-dark': '#192F4D',
        'blue-light': '#0088D3',
        'blue-light-200': '#5094F2',
        'dark': '#1E2126',
        'sub-title-dark': '#342929',
        'gray-dark': '#54595F',
        'light-gray': '#D8D8D8',
      }
    },
  },
  plugins: [],
}
export default config
