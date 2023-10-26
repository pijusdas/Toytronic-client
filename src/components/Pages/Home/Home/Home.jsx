import AosPackage from "../../AosPackage/AosPackage";
import AboutBest from "../../Our/AboutBest";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Offer20 from "../Offer20/Offer20";
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
                <Offer20/>
                <ContactUs/>
        </div>
    );
};

export default Home;