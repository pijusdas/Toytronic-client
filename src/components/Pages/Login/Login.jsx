import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {login}  = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();

        const form  =event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

        login(email,password)
        .then(result =>{
            const user = result.usser;
            console.log(user)
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
                            <button className=" text-white font-bold bg-green-500">google</button>
                        </div>
                        <p className=" mt-5 text-center">New to TOTRONICS? <Link className=" text-green-800 font-bold" to={'/register'}>Please Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;