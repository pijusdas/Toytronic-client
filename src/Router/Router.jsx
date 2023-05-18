import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home></Home>,
    },
  ]);

  export default router