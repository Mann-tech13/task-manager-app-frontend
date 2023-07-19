/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        primary: "#1B1B1B",
        secondary: "#272727",
        tertiary: "#2E2E2E",
        quad: "#434343",
        penta: "#000000",
        textPrimary: "#ffffff",
        textSecondary: "#D2D2D2",
        textTertiary: "#36B697",
        textError: "#FF4646",
        textQuad: "#9B9B9B",
        textPenta: "#AEAEAE",
        textDark: "#111111",
        textGreyLight: "#737373",
        
        // light theme
        lightPrimary: "#ffffff",
        lightSecondary: "#F8F8F8",
        lightTertiary: "#000000",
        lightOutline: "#EBEBEB",
        
        // latest
        layoutBackground: "#f3f6fc",
        
        // theme
        theme: "#635fc7",
        themeHover: "#514cba",
        dangerTheme: "#d11d17",
        progressTheme: "#fce303",
        resolvedTheme: "#2cfc03",
        
        lightGrey: "#EFEFEF",
        lightGreyHover: "#ededed"

      },
    },
  },
  plugins: [],
}