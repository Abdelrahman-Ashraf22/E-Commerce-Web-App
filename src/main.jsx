import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./Components/Shop/Shop.jsx";
import HomePage from "./Components/Home/Homepage.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../src/Redux/Store.js";
import WhishList from "./Components/Cart/WhishList.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import ViewCart from "./Components/Cart/ViewCart.jsx";
import SingleProduct from "./Components/Product/SingleProduct.jsx";
import Signup from "./Components/Signup/SignUp.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/e-commerce-web-app/",
    element: <App />,
    children: [
      {
        path: "/e-commerce-web-app/",
        element: <HomePage />,
      },

      { path: "/e-commerce-web-app/checkout", element: <Checkout /> },
      { path: "/e-commerce-web-app/viewcart", element: <ViewCart /> },
      { path: "/e-commerce-web-app/wishlist", element: <WhishList /> },
      { path: "/e-commerce-web-app/wishlist/:id", element: <SingleProduct /> },
      {
        path: "/e-commerce-web-app/shop",
        element: <Shop />,
      },

      {
        path: "/e-commerce-web-app/shop/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/e-commerce-web-app/viewcart/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/e-commerce-web-app/shop/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/e-commerce-web-app/wishlist/singleproduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "/e-commerce-web-app/singleproduct/:id",
        element: <SingleProduct />,
      },
      { path: "/e-commerce-web-app/signup", element: <Signup /> },
      { path: "/e-commerce-web-app/login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
