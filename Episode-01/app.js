// example 1
// let heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "attribute" },
//   "Welcome to naseem"
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// example 2
//<div class="parent">
//<div class="child">
// <h1>I am h1 tag</h1>
//</div>
//</div>

// let parent = React.createElement(
//   "div",
//   { className: "parent" },
//   React.createElement(
//     "div",
//     { className: "child" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

// console.log("parent", parent);
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// example 3
//<div class="parent">
//<div class="child">
// <h1>I am h1 tag</h1>
// <h2>I am h2 tag</h2>
//</div>
//</div>

// let parent = React.createElement(
//   "div",
//   { className: "parent" },
//   React.createElement("div", { className: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

// console.log("parent", parent);

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// example 4
//<div class="parent">
//<div class="child1">
// <h1>I am h1 tag</h1>
// <h2>I am h2 tag</h2>
//</div>
//<div class="child2">
// <h1>I am h1 tag</h1>
// <h2>I am h2 tag</h2>
//</div>
//</div>

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
