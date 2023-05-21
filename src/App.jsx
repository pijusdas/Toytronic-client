import { Outlet } from "react-router-dom";
import NavBar from "./components/shared/NavBar/NavBar";
import Footer from "./components/shared/Footer/Footer";

  
 
 const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
 };
 
 export default App;