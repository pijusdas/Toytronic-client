import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { login,loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        login(email,password)
        .then(result =>{
             console.log(result.user)
             navigate(from)
            })
        .catch(error => console.log(error))
         
    }

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user)
            navigate(from)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="  min-h-screen mx-auto w-1/2 mt-20 ">
            <h1 className=" text-center text-3xl font-bold mb-12 text-green-600">Please Login</h1>
            <div className=" border-y-4   border-y-green-500 rounded-2xl ">
                <div className="card flex-shrink-0    shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-green-700 bg-green-600 btn-primary">Login</button>
                        </div>
                        <div className="divider">OR Sign in With</div>
                        <div className=" text-center">
                            <button onClick={handleGoogleLogin}   ><FaGoogle className=" h-8 w-8 font-bold text-green-600" ></FaGoogle> </button>
                        </div>
                        <p className=" mt-5 text-center">New to TOTRONICS? <Link className=" text-green-800 font-bold" to={'/register'}>Please Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;