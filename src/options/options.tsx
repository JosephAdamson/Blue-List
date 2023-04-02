import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import OptionsPage from "./OptionsPage";

const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(
    container
);


root.render(
    <OptionsPage/>
);