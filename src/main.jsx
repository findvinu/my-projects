import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import GitContextProvider from "./context/fetchApiContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GitContextProvider>
          <App />
        </GitContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
