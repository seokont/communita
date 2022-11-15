import React from "react";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ruRU from "rsuite/locales/ru_RU";
import { CustomProvider } from "rsuite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomProvider locale={ruRU}>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
