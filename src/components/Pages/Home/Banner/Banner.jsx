import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-[#1B4D3E]">
            <div className=" flex justify-between relative px-12 h-screen">
                <div className=" flex items-center justify-center  text-white">
                    <div className=" ">
                        <h1 className=" text-6xl font-bold">The Baby <br /> Shop</h1>
                        <p className=" my-8">Everything Need From here</p>
                        <Link className="  bg-white px-10 py-3 rounded-3xl font-bold text-green-900">Shop Now</Link>
                    </div>
                </div>

                <div className="flex -mr-56 mt-56 justify-center items-center ">
                    <img className=" h-72 w-72 rounded-2xl" src="https://images.unsplash.com/photo-1523157729865-dc28491c220b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="" />
                </div>

                <div className="flex items-center ml-6 justify-center text-white">
                    <img className=" h-96 rounded-2xl w-96" src="https://images.unsplash.com/photo-1572797258549-99b800487d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;