import { React } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24292F",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
