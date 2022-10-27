import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Details from "../Details/Details";
import Catagory from "../Home/Catagory";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Private from "../Private/Private";
import RightSide from "../RightSide/RightSide";

import Login from "../Signup-login/Login";
import SignUp from "../Signup-login/SignUp";

export const router = createBrowserRouter([
 {
  path: '/', element:<Main></Main>,
  children:[
   {
    path:'/', element:<Home></Home>,
    loader:()=> fetch('https://islamic-learn-server.vercel.app/islamic')
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
    return fetch(`https://islamic-learn-server.vercel.app/catagory/${params.id}`)
    },
   
   },
   {
    path:'/details/:id', element:<Private><Details></Details></Private>,
    loader:({params})=>{
return fetch(`https://islamic-learn-server.vercel.app/islamic/${params.id}`)
    }
   },
   {
    path:'/blog', element:<Blog></Blog>
   }
 

  ]
 },


])