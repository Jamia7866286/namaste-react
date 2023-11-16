import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";
const MainLayout = () => {

  console.log("children",children)
  return (
    <div className="app">
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
