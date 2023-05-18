import { Outlet } from "react-router-dom";
import NavBar from "../../../shared/NavBar/NavBar";

 
const Home = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;