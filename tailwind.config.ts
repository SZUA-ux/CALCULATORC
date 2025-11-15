import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0f172a',
        accent: '#0ea5e9',
        muted: '#f8fafc',
      },
    },
  },
  plugins: [],
};

export default config;
