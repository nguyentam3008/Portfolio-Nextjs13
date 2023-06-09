/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "767.98px",
        lg: "1023.98px",
      },
    },
    colors: {
      "bg-primary": "#0f172a",
      "text-primary": "#e2e8f0",
      "text-secound": "#94a3b8",
      "gr-12": "#122b39",
      "gr-5a": "#5ae0cc",
      "br-64": "#64748b",
      white: "#94a3b8",
      shadow: "rgba(255, 255,255,0.6)",
      transparent: "transparent",
      "gray-800": "rgb(55 65 81)",
      "gray-500": "rgb(107 114 128)",
    },
  },
  plugins: [],
};
