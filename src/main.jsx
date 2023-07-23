import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import FontStyles from "./styles/Fonts.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
