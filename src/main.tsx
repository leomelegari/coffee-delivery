import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressContextProvider } from "./contexts/AddressContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AddressContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </CartContextProvider>
      </AddressContextProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
