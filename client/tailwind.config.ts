import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        "400px": "400px",
        "480px": "480px",
        "768px": "768px",
        "800px": "800px",  
        "1024px": "1024px",
        "1100px": "1100px",
        "1280px": "1280px",
        "1350px": "1350px",
        "1500px": "1500px",
        "1800px": "1800px",
      },
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [],
};

export default config;
