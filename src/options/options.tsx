import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(
    container
);


root.render(
    <div className="bg-slate-300 h-screen">
        <h1 className="text-black">Options</h1>
    </div>
);