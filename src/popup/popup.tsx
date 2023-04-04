import React from "react";
import ReactDOM from "react-dom/client";
import PopupContainer from "./PopupContainer";


const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(
    container
);

root.render(
    <PopupContainer/>
);