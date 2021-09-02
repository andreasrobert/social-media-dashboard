import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "125vh",
  lg: "168vh",
  xl: "1440px",
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
          fontSize: { base: "" },
          lineHeight: { base: "" },
        },
        H2: {
          fontSize: { base: "" },
          lineHeight: "",
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
          fontSize: {
            base: "",
          },
          lineHeight: {
            base: "",
          },
        },
      },
    },
  },

  fonts: {
    heading: "",
    body: "",
  },

  breakpoints,
});
