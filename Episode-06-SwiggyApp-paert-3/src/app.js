import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import HeaderComponent from "./components/Header";
import ListComponent from './components/List';

const About = lazy(()=> import('./components/About'))
const RestaurantMenuPage = lazy(()=> import('./pages/restaurant_menu/restaurant_menu_page'))
const GroceryPage = lazy(()=> import('./pages/grocery_page'));


const AppLayout = () => {
  return (
   <div className="app">
       {/* <MainLayout> */}
        <HeaderComponent />
       
        <Outlet/>
       {/* </MainLayout> */}
    </div>
  );
};



export const AppRouting = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<ErrorBoundary />,
    children: [
      {
        path:"/",
        element: <ListComponent />
      },
      {
        path:"/about",
        element:<Suspense fallback="loading about page..."><About /></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<Suspense fallback="loading restaurant menu page..."><RestaurantMenuPage /></Suspense>
      },
      {
        path:"/grocery",
        element:<Suspense fallback="loading grocery page..."><GroceryPage /></Suspense>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouting} />);
