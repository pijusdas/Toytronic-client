import { Outlet } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";

  
 
 const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
 };
 
 export default App;