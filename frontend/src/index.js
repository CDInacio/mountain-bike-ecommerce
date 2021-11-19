import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import store from "./store/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bc6c25",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
