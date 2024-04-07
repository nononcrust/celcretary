import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6C00",
        "accents-5": "#111111",
        "accents-4": "#979797",
        "accents-3": "#AEAEB2",
        "accents-2": "#BBBBBB",
        "accents-1": "#E5E5E5",
        "accents-0": "#F2F4F7",
        red: "#D04354",
        yellow: "#B54708",
        green: "#039855",
        bluegray: "#344054",
        "red-subtle": "#FDF5FA",
        "red-light": "#FDDEF1",
        "yellow-subtle": "#FFF7EB",
        "yellow-light": "#FFE5BE",
        "green-subtle": "#FAFAE5",
        "green-light": "#EFF1B1",
        "gray-subtle": "#F2F4F7",
      },
      maxWidth: {
        main: "480px",
      },
    },
    fontFamily: {
      sans: ["var(--font-pretendard)", ...defaultTheme.fontFamily.sans],
    },
    keyframes: {
      progress: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
    animation: {
      progress: "progress 3s ease-out",
    },
  },
  plugins: [],
};
export default config;
