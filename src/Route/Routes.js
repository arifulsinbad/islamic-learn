import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Signup-login/Login";
import SignUp from "../Signup-login/SignUp";

export const router = createBrowserRouter([
 {
  path: '/', element:<Main></Main>,
  children:[
   {
    path:'/', element:<Home></Home>
   },
   {
    path:'/signup', element:<SignUp></SignUp>
   },
   {
    path:'/login', element:<Login></Login>
   }
  ]
 }
])