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
        yellowHoverColor: "var(--yellow-hover-color)",
        orangeСolor: "var(--orange-color)",
        orangeHoverColor: "var(--orange-hover-color)",
        redСolor: "var(--red-color)",
        redHoverColor: "var(--red-hover-color)",
      },
    },
  },
  plugins: [],
};
