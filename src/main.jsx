import React from "react";
import ReactDOM from "react-dom/client";
import DisplayWhenFetched from "./DisplayWhenFetched.jsx";
import "./css/Tiles.css";
import Loading from "./Components/Loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DisplayWhenFetched />
  </React.StrictMode>
);
