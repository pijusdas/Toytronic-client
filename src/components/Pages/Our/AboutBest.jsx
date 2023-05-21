import { FaSlack ,FaWeight,FaUsersCog,FaLightbulb} from "react-icons/fa";

const AboutBest = () => {
    return (
        <div className=" my-24">
            <div>
                <div className=" lg:flex justify-between gap-20">
                    <h1 className=" text-5xl font-bold ">
                        
                         Why We Are Best In The Market</h1>
                    <p className=" w-[50%]">We take pride in offering an exceptional customer experience. Our knowledgeable and friendly staff are here to assist you in finding the perfect electric toy for your needs. We provide detailed product information, expert recommendations, and a hands-on demonstration of our toys to help you make an informed decision.</p>
                </div>
            </div>


            <div className=" mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="card w-full bg-green-100 shadow-2xl">
                    <div className="card-body">
                        <FaSlack className="  text-green-800 h-24 w-24"></FaSlack>
                        <h2 className="card-title text-2xl font-bold my-5"> Wide Range of Electric Toys</h2>
                        <p>Explore a vast collection of electric toys that cover a diverse range of interests and age groups. From high-speed remote-controlled cars to mesmerizing drones and interactive robots, we offer an extensive selection that caters to all preferences and ensures there is something for everyone.
                        </p>
                    </div>
                </div>
                <div className="card w-full bg-green-100 shadow-2xl">
                    <div className="card-body">
                        <FaWeight className="  text-green-800 h-24 w-24"></FaWeight>
                        <h2 className="card-title text-2xl font-bold my-5">  Uncompromising Quality Standards</h2>
                        <p>We prioritize quality and safety, ensuring that every electric toy in our inventory meets stringent standards. Our toys are made from durable materials, undergo thorough testing, and are designed to withstand the rigors of play. With us, you can trust that you are getting products of the highest quality.</p>
                    </div>
                </div>
                <div className="card w-full bg-green-100 shadow-2xl">
                    <div className="card-body">
                        <FaUsersCog className="  text-green-800 h-24 w-24"></FaUsersCog>
                        <h2 className="card-title text-2xl font-bold my-5"> Knowledgeable and Friendly Staff</h2>
                        <p>Our dedicated team of toy experts is passionate about helping you find the perfect electric toy. We provide personalized guidance, detailed product information, and expert recommendations to ensure you make an informed choice. Count on us to answer your questions and assist you in selecting the ideal toy for your needs.</p>
                    </div>
                </div>
                <div className="card w-full bg-green-100 shadow-2xl">
                    <div className="card-body">
                        <FaLightbulb className="  text-green-800 h-24 w-24"></FaLightbulb>
                        <h2 className="card-title text-2xl font-bold my-5"> Inspiring Creativity and Learning</h2>
                        <p>Our electric toys go beyond entertainment – they inspire creativity, problem-solving skills, and STEM learning. By engaging with our toys, children can develop important cognitive abilities while having a blast. We believe in the power of play to nurture curiosity and provide valuable educational experiences.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutBest;