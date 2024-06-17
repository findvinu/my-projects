import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import GitContextProvider from "./context/fetchApiContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <CssBaseline />
        <GitContextProvider>
          <App />
        </GitContextProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
