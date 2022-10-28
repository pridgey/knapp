import { createStitches } from "@stitches/core";

export const { createTheme, css } = createStitches({
  theme: {
    space: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
    },
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px",
    },
    shadows: {},
  },
});

export const darkTheme = createTheme("darkTheme", {
  colors: {
    background: "#090C08",
    black: "#090C08",
    blue: "#63B0CD",
    foreground: "#F4F5F6",
    gray: "#A7AAA4",
    green: "#37A748",
    orange: "#F18805",
    purple: "#D232FF",
    red: "#E43A4B",
    white: "#F4F5F6",
  },
});

export const lightTheme = createTheme("lightTheme", {
  colors: {
    background: "#F4F5F6",
    black: "#090C08",
    blue: "#2F546A",
    foreground: "#090C08",
    gray: "#36393B",
    green: "#2A4D14",
    orange: "#75450C",
    purple: "#693668",
    red: "#AD1F2D",
    white: "#F4F5F6",
  },
});
