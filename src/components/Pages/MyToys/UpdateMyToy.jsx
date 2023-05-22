import { useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const options = [
    { value: 'Intelligent-toy', label: 'Intelligent-toy' },
    { value: 'Robotics-toy', label: 'Robotics-toy' },
    { value: 'Vehicle-toy', label: 'Vehicle-toy' },
];


const UpdateMyToy = () => {
    const { user } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState(null);
    const [toy,setToy] = useState({})

    const { id } = useParams()

    useEffect(()=>{
        fetch(`https://pijus-repo-production.up.railway.app/singleToy/${id}`)
        .then(res => res.json())
        .then(data => setToy(data))

    },[id])



    const handleUpdatedToys = (event) => {
        event.preventDefault();

        const form = event.target
        const photo = form.photoUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quntity = form.quntity.value;
        const details = form.details.value;
        const _id = form._id.value;


        const updatedToy = {
            _id, name, photo, sellerName, sellerEmail, price, rating, quntity, details, category: selectedOption
        }

        console.log(updatedToy)

        fetch(`https://pijus-repo-production.up.railway.app/updateToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated succesfully')
                }
            })

    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold ">Add Your Toy</h1>
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
        </div>
    );
};

export default UpdateMyToy;