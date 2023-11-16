import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Body from "../src/components/Body";

// const AppRouting = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Body />} />
//       <Route path="restaurant/:resId" element={<h1>Card Details</h1>} />
//       {/* <Route path="*" element={<NoPage />} /> */}
//     </Routes>
//   );
// };

// export default AppRouting;

export const AppRouting = createBrowserRouter([
  {
    path:"/",
    element:<Body />
  },
  {
    path:"restaurant/:resId",
    element:<h1>Card Details</h1>
  }
])

