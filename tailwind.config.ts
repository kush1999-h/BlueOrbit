import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#e0f7ff",
          100: "#b3ecff",
          200: "#66d9ff",
          300: "#33ccff",
          400: "#0fc9ff",
          500: "#00c7ff",
          600: "#00b8e6",
          700: "#0099cc",
          800: "#006699",
          900: "#003d66",
        },
        orbit: {
          dark: "var(--orbit-dark)",
          darker: "var(--orbit-darker)",
          card: "var(--orbit-card)",
        },
      },
      borderColor: {
        "orbit-glow": "rgba(102, 217, 255, 0.3)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(102, 217, 255, 0.4)",
        "glow-cyan-lg": "0 0 40px rgba(102, 217, 255, 0.6)",
        "glow-cyan-sm": "0 0 10px rgba(102, 217, 255, 0.2)",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            filter: "drop-shadow(0 0 20px rgba(102, 217, 255, 0.4))",
          },
          "50%": {
            opacity: "0.8",
            filter: "drop-shadow(0 0 35px rgba(102, 217, 255, 0.6))",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
