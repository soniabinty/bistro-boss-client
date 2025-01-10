import {
  createBrowserRouter,
 
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/OrderFood/Order";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret";
import DashBoard from "../Layout/Dashboard/DashBoard";
import Cart from "../Layout/Dashboard/Cart";


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
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: <PrivateRoute>
          <Secret></Secret>
        </PrivateRoute>
      },
    ],
  },


  {
path: 'dashboard',
element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
children: [


  {
    path: 'cart',
    element: <Cart></Cart>
  }

]


  }

]);