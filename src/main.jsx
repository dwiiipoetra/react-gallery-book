import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/reducer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    base: '#A435F0',
    shadow: '#BC75EF'
  },
}

const fonts = {
  body: 'Tahoma',
  heading: 'Courier New'
}

const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme = {theme}>
      <Provider store = {store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
