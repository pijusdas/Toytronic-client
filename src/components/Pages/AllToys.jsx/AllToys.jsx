import { useEffect, useState } from "react";
import ToyTableData from "./toyTableData";

const AllToys = () => {
    const [allToys, setallToys] = useState([])
    console.log(allToys)
    // const { name, price, _id, quntity, sellerName, category } = allToys

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setallToys(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <h1 className=" text-5xl font-bold text-center my-20">Toy World</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Sub-Category</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                        allToys.map(toy =>  <ToyTableData key={toy._id} toy={toy}></ToyTableData>)
                    }
                   
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;