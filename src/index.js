import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* To add a new path:
1. Duplicate one of the existing files
2. Import the file like below
3. add the file to the routes around like 30
*/
import Sysadmin from "./Sysadmin";
import Setups from "./Setups";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.StrictMode>
            <App />
          </React.StrictMode>
        }
      />
      <Route path="sysadmin" element={<Sysadmin />} />
      <Route path="setups" element={<Setups />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
