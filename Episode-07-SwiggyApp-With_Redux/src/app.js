import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import HeaderComponent from "./components/Header";
import ListComponent from "./components/Home";
import CartPage from "./pages/cart_page";
import store from "./redux/store/store";
import PaymentPage from './pages/payment';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';


const About = lazy(() => import("./components/About"));
const RestaurantMenuPage = lazy(
    () => import("./pages/restaurant_menu/restaurant_menu_page")
);
const GroceryPage = lazy(() => import("./pages/cart_page"));
const queryClient = new QueryClient()

const AppLayout = () => {
    
    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Provider store={store}>
                <div className="app">
                    <HeaderComponent />
                    <div className="app_inner">
                        <Outlet />
                    </div>
                </div>
            </Provider>
        </QueryClientProvider>
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
            {
                path: "/payment",
                element: (
                    <Suspense fallback="loading payment page...">
                        <PaymentPage />
                    </Suspense>
                ),
            },
            {
                path: "/login",
                element: (
                    <Suspense fallback="loading login page...">
                        <LoginPage />
                    </Suspense>
                ),
            },
            {
                path: "/signup",
                element: (
                    <Suspense fallback="loading signup page...">
                        <SignupPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouting} />);
