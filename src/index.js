import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import GitContextProvider from "./context/fetchApiContextProvider";

// const baseURL = import.meta.env.VITE_BASE_URL || "";

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
