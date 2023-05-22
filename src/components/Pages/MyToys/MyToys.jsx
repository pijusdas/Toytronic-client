import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";





const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [control, setControl] = useState(false)




    useEffect(() => {
        fetch(`https://pijus-repo-production.up.railway.app/allToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user, control])


    const sortByPrice = () => {
        const sortedItems = [...myToys].sort((a, b) => parseInt(a.price) - parseInt(b.price));
        setMyToys(sortedItems);
        console.log(sortedItems)
    };
    const sortByPriceDescending = () => {
        const sortedItems = [...myToys].sort((a, b) => parseInt(b.price) - parseInt(a.price));
        setMyToys(sortedItems);
        console.log(sortedItems)
    };


    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://pijus-repo-production.up.railway.app/singleToy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            setControl(!control)
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h1 className=" text-center font-bold text-5xl my-10">My Toys</h1>

            <div className=" flex gap-2 justify-end">
                <div className=" flex justify-end mr-10">
                    <button onClick={sortByPrice} className="btn btn-outline ">Short Data By Price Ascending</button>
                </div>
                <div className=" flex justify-end mr-10">
                    <button onClick={sortByPriceDescending} className="btn btn-outline ">Short Data By Price Descending</button>
                </div>
            </div>
            <div className="overflow-x-auto my-20">
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
                            <td>${toy?.price}</td>
                            <td>{toy?.rating} Stars</td>
                            <td>{toy?.quntity}</td>
                            <td>{toy?.category?.value}</td>
                            <td>
                                <Link value={toy} to={`/updateToy/${toy?._id}`}>
                                    <button className="btn hover:bg-green-700 bg-green-600">Update Toy</button>
                                </Link>
                            </td>
                            <td> <button onClick={() => handleDelete(toy?._id)} className="btn hover:bg-red-700 bg-red-600">Delete</button></td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;