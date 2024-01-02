import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import Meta from "./Meta";
import GlobalStyles from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Meta />
    <App />
  </BrowserRouter>
);