/* 
// Theme from indie tech app
*/
const white = "#ffffff";
const grey500 = "#9e9e9e";
const grey900 = "#232323";
export const theme = {
  fontFamily: {
    sans: ["var(--font-raleway)"],
    serif: ["var(--font-montserrat)"],
  },
  colors: {
    common: {
      white: white,
      black: grey900,
    },
    primary: {
      lighter: "#95dae1",
      light: "#47A1AC",
      main: "#1A8A98",
      dark: "#12606A",
    },
    secondary: {
      lighter: "#9e9e9e",
      light: "#757575",
      main: "#616161",
      dark: "#3d3d3d",
    },
    success: {
      lighter: "#e2f3eb",
      light: "#8bcdae",
      main: "#25ad79",
      dark: "#00502a",
    },
    warning: {
      lighter: "#fff3e0",
      light: "#ffcc80",
      main: "#FF8D3E",
      dark: "#ff6f00",
    },
    error: {
      lighter: "#fbe9e7",
      light: "#ffab91",
      main: "#E26152",
      dark: "#d84315",
    },
    orange: {
      lighter: "#fff3e0",
      light: "#ffcc80",
      main: "#FF8D3E",
      dark: "#ff6f00",
    },
    green: {
      lighter: "#e2f3eb",
      light: "#8bcdae",
      main: "#27996D",
      dark: "#00502a",
    },
    red: {
      lighter: "#fbe9e7",
      light: "#ffab91",
      main: "#E26152",
      dark: "#d84315",
    },
    purple: {
      lighter: "#eae6ff",
      light: "#c0b6f2",
      main: "#7875BC",
      dark: "#4c49a2",
    },
    // blue: {
    //   lighter: '#e6f0ff',
    //   light: '#b3d4ff',
    //   main: '#4d9dff',
    //   dark: '#0066cc',
    // },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      500: grey500,
      400: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      900: grey900,
    },
    text: {
      primary: grey900,
      secondary: grey500,
    },
    background: {
      default: white,
      paper: "#EEF1F2",
      paperDark: "#D7DFE2",
      paperDarker: "#BFCACD",
    },
  },
};
export const colors = theme.colors;
