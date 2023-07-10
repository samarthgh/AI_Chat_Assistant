/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js,css}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 20s steps(40) infinite , blink .7s alternate infinite "
      }
    },
  
  },
  plugins: [],
}

