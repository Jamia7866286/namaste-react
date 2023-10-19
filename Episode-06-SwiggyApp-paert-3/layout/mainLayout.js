import React from "react";
import Header from "../src/components/Header";
import { Outlet } from "react-router-dom";
import Routing from "../Routing/Routing";

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <Routing />
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
