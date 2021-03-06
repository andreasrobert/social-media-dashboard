import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "10px",
  md: "420px",
  lg: "530px",
  lm: "800px",
  xl: "920px",
});

const components = {
  Heading: {
    baseStyle: {
      // color: "black",
    },
    sizes: {
      H1: {
        fontSize: { base: "4vw", lm: "40px" },
      },
      H2: {
        fontSize: { base: "20px" },
        lineHeight: "25px",
      },
    },
  },

  Text: {
    baseStyle: {
      // color: "black",
    },
    sizes: {
      Body: {
        fontWeight: "400",
      },
      P: {
        fontSize: "16px",
        fontWeight: "400",
      },
    },
  },
  
};


// export const theme = extendTheme({
//     breakpoints,
//     components,
//     colors: {
//       yellow: "#ffcf56",
//       black: "black",
//       borderColor: "black",
//     },
// });

export const theme = extendTheme({
  breakpoints,
  components,
  colors: {
    yellow: "#ffcf56",
    black:"black",
    red: "#522828",
    grey: "#b1b1b1",
    lightGrey: "#8f8f8f",
    green:"#656d4a",
    grgray:"#ede0d4",
    blue:"#26547c",
    pink:"#db4a6c"
  },
});


