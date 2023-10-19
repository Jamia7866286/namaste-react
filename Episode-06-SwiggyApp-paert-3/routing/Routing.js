import React from "react";
import Body from "../src/components/Body";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="restaurant/:resId" element={<h1>Card Details</h1>} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
