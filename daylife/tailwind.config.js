/** @type {import('tailwindcss').Config} */
// import colors from '@/styles/colors';
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: "1rem",
    },
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      minHeight: {
        xxs: "24.125rem",
        438: "27.375rem",
        580: "36.25rem",
        650: "40.625rem",
        700: "43.75rem",
      },
      maxHeight: {
        xxs: "24.125rem",
        342: "21.375rem",
        360: "22.5rem",
        500: "40.625rem",
        700: "43.75rem",
      },
      minWidth: {
        xxs: "24.125rem",
        300: "18.75rem",
        342: "21.375rem",
        360: "22.5rem",
        900: "56.25rem",
      },
      maxWidth: {
        xxs: "24.125rem",
        900: "56.25rem",
        360: "22.5rem",
        460: "28.75rem",
      },

      transitionProperty: {
        gridRows: "grid-template-rows",
      },
      borderRadius: {
        small: "0.625rem",
        mediun: "1.25rem",
        large: "1.875rem",
        "6lx": "3.125rem",
      },
      fontSize: {
        10: [
          "10px",
          {
            letterSpacing: "0.03em",
            lineHeight: "14px",
          },
        ],
        xs: [
          "0.75rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "16px",
          },
        ],
        sm: [
          "0.8rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "20px",
          },
        ],
        base: [
          "1rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "25px",
          },
        ],
        xl: [
          "1.25rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "30px",
          },
        ],
        "2xl": [
          "1.563rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "30px",
          },
        ],
        18: [
          "1.125rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "34px",
          },
        ],
        26: [
          "26px",
          {
            letterSpacing: "0.03em",
            lineHeight: "34px",
          },
        ],
        28: [
          "1.75rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "38px",
          },
        ],
        "3xl": [
          "1.953rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "25px",
          },
        ],
        "4xl": [
          "36px",
          {
            letterSpacing: "0.03em",
            lineHeight: "49px",
          },
        ],
        40: [
          "2.5rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "55px",
          },
        ],
        "5xl": [
          "3.052rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "25px",
          },
        ],
        22: [
          "22px",
          {
            letterSpacing: "0.03em",
            lineHeight: "25px",
          },
        ],
        xll: [
          "32px",
          {
            letterSpacing: "0.03em",
            lineHeight: "40px",
          },
        ],
        mobxll: [
          "26px",
          {
            letterSpacing: "0.03em",
            lineHeight: "25px",
          },
        ],
        60: [
          "3.75rem",
          {
            letterSpacing: "0.03em",
            lineHeight: "70px",
          },
        ],
        "btn-18": [
          "18px",
          {
            letterSpacing: "0.03em",
            lineHeight: "20px",
          },
        ],
        "btn-20": [
          "20px",
          {
            letterSpacing: "0.03em",
            lineHeight: "20px",
          },
        ],
        "btn-22": [
          "22px",
          {
            letterSpacing: "0.03em",
            lineHeight: "20px",
          },
        ],
        "btn-24": [
          "24px",
          {
            letterSpacing: "0.03em",
            lineHeight: "20px",
          },
        ],
      },
      fontFamily: {
        "reem-kufi": ["Reem Kufi", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        primary: "#494B7D",
        primaryhover: "#5A5C99",
        secondary: "#F3F6FD",
        darkprimary: "#2F3152",
        mediumprimary: "#474F73",
        lightprimary: "#6771E4",
        lightprimaryhover: "#7F88F0",
        lightprimaryactive: "#e7eeff",
        metal: "#757B90",
        metallight: "#9FA0B7",
        gold: "#FAC250",
        active: "#6771E4",
        visited: "#6874DC",
        gray: "#4A4F5B",
        lightgray: "#AEB5C6",
      },
      boxShadow: {
        "3xl": "0px 10px 30px rgba(24, 31, 123, 0.2)",
        "2xl": "10px 10px 20px rgba(89, 92, 175, 0.25)",
        cookies: "0px -8px 31px 6px rgba(24, 31, 123, 0.2)",
      },
      height: {
        50: "50px",
        60: "60px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
      },
      zIndex: {
        under: "-1",
        z4: "4",
        40: "40",
        100: "100",
      },
      keyframes: {
        align: {
          from: {
            "z-index": "-1",
          },
          to: {
            "z-index": "5",
          },
        },
        "show-bottom": {
          from: {
            transform: "translateY(100px)",
          },
          to: {
            transform: "translateY(0px)",
          },
        },
        topLabel: {
          from: {
            top: "0px",
            color: "#949cb6",
            "font-size": "0.875rem"
          },
          to: {
            top: "-24px",
            "font-size": "0.625rem",
            color: "#6874dc"
          }
        }
      },
      animation: {
        zIndex: "0.7s linear 0.5s align forwards",
        "show-bottom": "0.5s linear show-bottom forwards",
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.typography': {
          display: '-webkit-box',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
