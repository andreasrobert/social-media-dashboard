import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import ThemeContextProvider from "./hooks/useTheme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
