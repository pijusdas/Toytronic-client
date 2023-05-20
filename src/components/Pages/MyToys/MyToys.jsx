import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";



 

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    



    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])


   

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Seller Email</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {myToys && myToys.map((toy, i) => <tr key={toy._id}>
                            <th>{i + 1}</th>
                            <td>{toy?.sellerName}</td>
                            <td>{toy?.sellerEmail}</td>
                            <td>{toy?.name}</td>
                            <td>{toy?.price}</td>
                            <td>{toy?.rating} Stars</td>
                            <td>{toy?.quntity}</td>
                            <td>{toy?.category?.value}</td>
                            <td>
                                <Link value={toy} to={`/updateToy/${toy?._id}`}>
                                    <button className="btn hover:bg-green-700 bg-green-600">Update Toy</button>
                                </Link>
                            </td>
                            <td> <button className="btn hover:bg-red-700 bg-red-600">Delete</button></td>




                            {/* Put this part before </body> tag */}
                            {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h1 className="text-center text-5xl font-bold ">Update Your Toy</h1>
                                        <form onSubmit={handleUpdatedToys} className=" w-full  ">
                                            <div className=" grid grid-cols-2  ">
                                                <div className="card-body">

                                                    <div className="form-control">
                                                        <input className="input block input-bordered" defaultValue={toy?._id} type="text" name="_id" placeholder={toy?._id} />

                                                        <label className="label">
                                                            <span className="label-text">Photo URL</span>
                                                        </label>
                                                        <input type="url" name="photoUrl" defaultValue={toy && toy?.photo} className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Name</span>
                                                        </label>
                                                        <input type="text" name="name" defaultValue={toy?.name} className="input input-bordered" />

                                                    </div>

                                                </div>
                                                <div className="card-body">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Seller Name</span>
                                                        </label>
                                                        <input defaultValue={user?.displayName} type="text" name="sellerName" className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Seller Email</span>
                                                        </label>
                                                        <input defaultValue={user && user?.email} type="text" name="sellerEmail" className="input input-bordered" />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Price</span>
                                                        </label>
                                                        <input type="text" name="price" defaultValue={toy?.price} className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Ratings</span>
                                                        </label>
                                                        <input type="text" name="rating" defaultValue={toy?.rating} className="input input-bordered" />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Available Quantity</span>
                                                        </label>
                                                        <input type="text" name="quntity" defaultValue={toy?.quntity} className="input input-bordered" />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Details Description</span>
                                                        </label>
                                                        <input type="text" name="details" defaultValue={toy?.details} className="input input-bordered" />
                                                    </div>


                                                    <div className="App">
                                                        <p>Category</p>
                                                        <Select
                                                            defaultValue={toy?.category?.value}
                                                            onChange={setSelectedOption}
                                                            options={options}
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn hover:bg-[#071f17] bg-[#1B4D3E] btn-primary">Updated Toy</button>
                                            </div>
                                        </form>
                                        <ToastContainer />
                                        <div className="modal-action">
                                            <label htmlFor="my-modal-5" className="btn hover:bg-green-800 bg-green-700">Update Later</label>
                                        </div>

                                    </div>
                                </div> */}

                            {/* <button className="btn hover:bg-red-700 bg-red-600">Delete</button> */}








                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;