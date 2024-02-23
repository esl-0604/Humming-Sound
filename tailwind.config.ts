import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_white: "#E8E8E8",
        custom_grey: "#363636",
      },
      fontFamily: {
        highlight: ["Pretendard-Black"],
        main: ["Pretendard-Medium"],
        default: ["Pretendard-Thin"],
        branding: ["SugarMagic"],
      },
      boxShadow: {
        button1:
          "0 -5px 5px 0 rgba(232, 232, 232, 0.05), 0 5px 5px 0 rgba(0, 0, 0, 0.25)",
        button2:
          "0 5px 4px 0 rgba(0, 0, 0, 0.25), 0 -5px 4px 0 rgba(255, 255, 255, 0.05)",
        button3: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-border": "rgba(232, 232, 232, 0.5)",
      },
    },
  },
  plugin: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".truncate-ellipsis": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": 3,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
