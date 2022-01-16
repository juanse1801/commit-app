import React from "react";
import ReactDOM from "react-dom";
import Commits from "./pages/commits/Commits";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Commits />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
