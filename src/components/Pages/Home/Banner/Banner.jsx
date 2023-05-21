import { Link } from "react-router-dom";
import lottiefile from '../../../../../lottiefiles.json'
import Lottie from "lottie-react";
const Banner = () => {

     

    return (
        <div className="bg-[#1B4D3E]">
            <div className=" lg:flex  justify-between relative px-12 h-screen">
                <div className=" flex items-center justify-center  text-white">
                    <div className=" ">
                        <h1 className=" text-6xl font-bold">The Baby <br /> Shop</h1>
                        <p className=" my-8">Everything Need From here</p>
                        <Link className="  bg-white px-10 py-3 rounded-3xl font-bold text-green-900">Shop Now</Link>
                    </div>
                </div>
                <div className="h-[50] w-[50] mt-20 rounded-xl"  >
                    <Lottie className=" " animationData={lottiefile}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Banner;