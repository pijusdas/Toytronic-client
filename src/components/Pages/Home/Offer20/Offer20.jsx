import { FaArrowRight } from "react-icons/fa";
const Offer20 = () => {
    return (
        <div className=" px-36 py-32 bg-green-500 lg:flex gap-5 justify-between items-center">
            <h1 className=" text-white text-5xl ">Get 20% off for <br /> first order</h1>

            <div className=" flex justify-center items-center gap-3">
                <input className=" w-80 py-5 ps-4 bg-green-500 border-2 rounded-full placeholder-white border-green-50" type="email" placeholder="Type Your Email" />
                <button className=" bg-white p-3 rounded-full" type="submit" >
                    <FaArrowRight className="text-4xl text-green-500" />
                </button>
            </div>
        </div>
    );
};

export default Offer20;