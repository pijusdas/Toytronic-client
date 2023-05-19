import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user,logout } = useContext(AuthContext)
    console.log(user)

    const handleLogout = ()=>{
        logout()
        .then(res => console.log(res))
        .then(err=> console.log(err))
    }
    return (
        <div className=" bg-[#1B4D3E]">
            <div className="navbar bg-[#1B4D3E] h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    home
                                </a>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=" text-2xl font-bold text-white "><span className=" text-green-400">TOY</span>TRONICS</a>
                </div>
                <div className="navbar-center hidden  text-white font-bold lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>All Toys</Link>
                        </li>
                        {user && <>
                            <li><a>My Toys</a></li>
                            <li><Link to={'/addToys'}>Add A Toys</Link></li>
                        </>}
                        <li><a>Blogs</a></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   { user?<>
                    <div className={`w-14 border-4  border-white rounded-full`}>
                        <img className={`rounded-full hover:${user?.providerId} text-white`} src={user?.photoURL} />
                    </div>
                    <Link onClick={handleLogout} to={'/login'} className=" ml-5 bg-white px-10 py-3 rounded-3xl font-bold text-green-900"> Logout</Link>
                   </> :
                    <Link to={'/login'} className=" bg-white px-10 py-3 rounded-3xl font-bold text-green-900"> Login</Link>}
                </div>
            </div>
            <hr />
            {/* banner section */}
        </div>
    );
};

export default NavBar;