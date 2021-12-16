import { React } from "react";
import {Provider} from 'react-redux'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter } from "react-router-dom";
import store from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bc6c25",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
