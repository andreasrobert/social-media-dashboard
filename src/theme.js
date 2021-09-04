import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "10px",
  md: "420px",
  lg: "530px",
  lm: "800px",
  xl: "920px",
});

export const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "",
        fontWeight: "",
      },
      sizes: {
        H1: {
          fontSize: {base:"4vw", lm: "40px" },
          lineHeight: { base: "" },
        },
        H2: {
          fontSize: { base: "20px" },
          lineHeight: "25px",
        },
        H3: {
          fontSize: "",
          lineHeight: "",
        },
      },
    },

    Text: {
      baseStyle: {
        fontFamily: "",
        fontWeight: "",
      },
      sizes: {
        Body: {
          fontWeight: "400",
          // lineHeight: {
          //   base: "",
          // },
        },
        P:{
          fontSize:"16px",
          fontWeight: "400",
        },
      },
    },
  },

  fonts: {
    heading: "",
    body: "",
  },

  Input: {},

  breakpoints,
});
