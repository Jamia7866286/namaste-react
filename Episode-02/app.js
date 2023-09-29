import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

console.log("parent", parent);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// ReactElement(object) = HTML (browser understand)
