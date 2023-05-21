import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
 

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if (loader) {
        return <progress className="progress progress-success w-56" value="100" max="100"></progress>

    }
    if (user) {
        return children;
    }
    return <div>
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    </div>
};

export default PrivateRoute;