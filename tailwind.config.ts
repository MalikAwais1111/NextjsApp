import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        glow: 'glow 1.5s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6), 0 0 15px rgba(255, 0, 0, 0.4), 0 0 20px rgba(255, 0, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 10px rgba(255, 0, 0, 1), 0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4)',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'), // This is correctly using require here
  ],
  daisyui: {
    themes: ["winter"],
  },
};

export default config;
