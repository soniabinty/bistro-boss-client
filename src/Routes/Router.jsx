import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/OrderFood/Order";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },

]);