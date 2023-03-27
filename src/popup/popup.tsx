import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

const container = document.createElement("div");
document.body.appendChild(container);
const root = ReactDOM.createRoot(
    container
);


root.render(
    <div className="flex bg-white h-[300px] w-[500px]">
        <div className="p-4">
            <h1 className="text-md font-bold text-black">Would you like to set a timeout for this site?</h1>
            <div>
                <h2></h2>
            </div>
        </div>
        <div className="w-1/2 bg-offWhite"></div>
    </div>
);