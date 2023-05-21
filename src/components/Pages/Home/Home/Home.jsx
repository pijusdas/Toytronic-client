import AosPackage from "../../AosPackage/AosPackage";
import AboutBest from "../../Our/AboutBest";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" px-12">
                <Gallery></Gallery>
                <ShopCategory></ShopCategory>
                <AosPackage></AosPackage>
                <AboutBest></AboutBest>
            </div>
        </div>
    );
};

export default Home;