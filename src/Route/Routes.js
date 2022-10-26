import { createBrowserRouter } from "react-router-dom";
import Details from "../Details/Details";
import Catagory from "../Home/Catagory";
import Home from "../Home/Home";
import Main from "../Layout/Main";

import Login from "../Signup-login/Login";
import SignUp from "../Signup-login/SignUp";

export const router = createBrowserRouter([
 {
  path: '/', element:<Main></Main>,
  children:[
   {
    path:'/', element:<Home></Home>,
    loader:()=> fetch('http://localhost:5000/islamic')
   },
   {
    path:'/signup', element:<SignUp></SignUp>
   },
   {
    path:'/login', element:<Login></Login>
   },
   {
    path:'/catagory/:id', element:<Catagory></Catagory>,
    loader:({params})=>{
    return fetch(`http://localhost:5000/catagory/${params.id}`)
    },
   
   },
   {
    path:'/details/:id', element:<Details></Details>,
    loader:({params})=>{
return fetch(`http://localhost:5000/islamic/${params.id}`)
    }
   }
  ]
 }
])