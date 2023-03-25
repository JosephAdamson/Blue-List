import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/popup.css";

const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(
    container
);

const test = <h1>Hello world</h1>;
root.render(
    test
);