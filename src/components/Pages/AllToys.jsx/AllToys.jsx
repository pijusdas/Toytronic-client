import { useEffect, useState } from "react";
import ToyTableData from "./toyTableData";

const AllToys = () => {
    const [allToys, setallToys] = useState([])
    const [searchText,setsearchText] = useState('')
    console.log(searchText)
    // const { name, price, _id, quntity, sellerName, category } = allToys

    useEffect(() => {
        fetch('https://toytronics-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                
                setallToys(data)
                console.log(data)
            })
    }, [])


    const handleSearch = () =>{
        fetch(`https://toytronics-server.vercel.app/searchToy/${searchText}`)
        .then(res=> res.json())
        .then(data =>{
            setallToys(data)
        })
    }
    // const handleSearch = e =>{
    //     setsearchText(e.target.value)
    // }
    
    return (
        <div>
            {/* search section */}
            <h1 className=" text-5xl font-bold text-center my-20">Toy World</h1>

            <div className=" w-2/6 mx-auto mb-10">
                <div className="input-group">
                    <input type="text" onChange={(e)=> setsearchText(e.target.value)} placeholder="Search…" className="input border-2 border-green-900 input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square bg-green-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            {/* My Toy table */}
            <div className="overflow-x-auto my-10">
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
                           allToys && allToys.map(toy => <ToyTableData key={toy._id} toy={toy}></ToyTableData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;