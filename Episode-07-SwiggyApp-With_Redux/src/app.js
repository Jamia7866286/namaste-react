import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import HeaderComponent from "./components/Header";
import ListComponent from "./components/List";
import CartPage from "./pages/cart_page";
import store from "./redux/store/store";

const About = lazy(() => import("./components/About"));
const RestaurantMenuPage = lazy(
  () => import("./pages/restaurant_menu/restaurant_menu_page")
);
const GroceryPage = lazy(() => import("./pages/cart_page"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        {/* <MainLayout> */}
        <HeaderComponent />
        <Outlet />
        {/* </MainLayout> */}
      </div>
    </Provider>
  );
};

export const AppRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <ListComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="loading about page...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback="loading restaurant menu page...">
            <RestaurantMenuPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback="loading grocery page...">
            <CartPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouting} />);
