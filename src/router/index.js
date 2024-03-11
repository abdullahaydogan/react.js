import {createBrowserRouter } from "react-router-dom";

import { SignUp } from '../pages/SignUp/index.jsx';
import { Home } from "../pages/Home/index.jsx";
import App from "../App.jsx";
import { Activation } from "../pages/activation/index.jsx";
import { Login } from "../pages/LogIn/index.jsx";
import { AboutUs } from "../pages/AboutUs/index.jsx";
export default  createBrowserRouter([
  {
    path:"/",
    Component: App,
    children:[
      {
        path:"/home",
        index: true,
        Component: Home
      },
      {
        path:"/signup",
        Component: SignUp
      },
      {
        path:"/activation/:token",
        Component: Activation
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/aboutus",
        Component: AboutUs
      }
     
    ]
  }
  ])