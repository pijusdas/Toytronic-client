import Banner from "../Banner/Banner";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-12">
                <Gallery></Gallery>
            </div>
        </div>
    );
};

export default Home;