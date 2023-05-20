import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Pages/Login/Login";
import Home from "../components/Pages/Home/Home/Home";
import Register from "../components/Pages/Register/Register";
import AddToys from "../components/AddToys/AddToys";
import AllToys from "../components/Pages/AllToys.jsx/AllToys";
import MyToys from "../components/Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element:   <App></App>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:  <Register/>
        },
        {
            path: '/addToys',
            element: <PrivateRoute> <AddToys/></PrivateRoute>
        },
        {
            path: '/allToys',
            element:  <AllToys></AllToys>
        },
        {
            path:'myToys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }


      ]

    },
  ]);

  export default router