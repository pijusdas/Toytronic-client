import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = event =>{
        event.preventDefault();


        const form = event.target ;
        const name =form.name.value
        const email =form.email.value
        const password =form.password.value
        const photo =form.photo.value
         console.log(name,email,password,photo)
         createUser(email,password)
         .then(result =>{
            const user = result.user;
            console.log(user)
         })
         .catch(err =>{
            console.log(err.message)
         })
    }
    return (
        <div className="  min-h-screen mx-auto w-1/2 mt-20 ">
            <h1 className=" text-center text-3xl font-bold mb-12 text-green-600">Please Register</h1>
            <div className=" border-y-4   border-y-green-500 rounded-2xl ">
                <div className="card flex-shrink-0    shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name"   className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password"  className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="photo"  className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-green-700 bg-green-600 btn-primary">Register</button>
                        </div>
                        <p className=" text-center">Already have an accout? <Link className=" text-green-800 font-bold" to={'/login'}>Please login</Link></p>
                         
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;