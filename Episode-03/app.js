import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("h1", {}, "Hi Naseem it is JSX");

let heading = <h1>Hi Naseem it is JSX</h1>;

//both output are same
console.log("parent", parent, heading);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// ReactElement(object) = HTML (browser understand)
