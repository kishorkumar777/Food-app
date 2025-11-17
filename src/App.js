import React, { lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Body from "./component/Body";
import Error from "./component/Error";
import About from "./component/About";
import Contact from "./component/Contact";
import RestroMenu from "./component/RestroMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

const About = lazy(()=> import("./component/About"));

const Contact = lazy(()=> import("./component/Contact"));
const AppLayout = () => {



  return (
   <Provider store={appStore}> 
    <div>
      <Header />
      <Outlet />
    </div>
  </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestroMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
