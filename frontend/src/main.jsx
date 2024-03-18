import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./context/AuthContext.jsx";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider
      toastOptions={{
        defaultOptions: {
          duration: 2000,
          isClosable: true,
          position: "top",
          
        },
      }}
      theme={theme}
    
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
