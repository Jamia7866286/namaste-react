import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const Body = () => (
  <div className="body">
    <div className="search">SearchComponent UI</div>
    <div className="rest-container">RestCardComponent UI</div>
  </div>
);

const Footer = () => <footer>Footer UI</footer>;

const AppLayout = () => (
  <div className="app-layout">
    <Header />
    <Body />
    <Footer />
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// ReactElement(object) = HTML (browser understand)
