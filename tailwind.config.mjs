/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-[#E42213]',
    'bg-[#EE7918]',
    'bg-[#FBB92F]',
    'bg-[--yellow-color]',
    'bg-[--orange-color]',
    'bg-[--red-color]',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        borderСolor: "var(--border-color)",
        yellowСolor: "var(--yellow-color)", 
        orangeСolor: "var(--orange-color)",
        redСolor: "var(--red-color)",
      },
    },
  },
  plugins: [],
};
