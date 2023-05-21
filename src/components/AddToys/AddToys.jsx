import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { AuthContext } from "../AuthProvider/AuthProvider";


const options = [
    { value: 'Intelligent-toy', label: 'Intelligent-toy' },
    { value: 'Robotics-toy', label: 'Robotics-toy' },
    { value: 'Vehicle-toy', label: 'Vehicle-toy' },
];

const AddToys = () => {
    const { user } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState(null);


    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target
        const photo = form.photoUrl.value;
        const name = form.name.value
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quntity = form.quntity.value;
        const details = form.details.value;

        
        const addedToy = {
            name, photo, sellerName, sellerEmail, price, rating, quntity, details,category:selectedOption
        }

        fetch('https://toytronics-server.vercel.app/allToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast("Added Toy Succesfully!")

                }
            })

        console.log(addedToy)
    }
    return (
        <div className=" my-20">
            <h1 className="text-center text-5xl font-bold ">Add Your Toy</h1>
            <form onSubmit={handleAddToys} className=" w-full  ">
                <div className=" grid grid-cols-2  ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />

                        </div>

                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input defaultValue={user?.displayName}  type="text" name="sellerName"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input  defaultValue={user && user?.email}  type="text" name="sellerEmail"   className="input input-bordered" />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" name="quntity" placeholder="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <input type="text" name="details" placeholder="details" className="input input-bordered" />
                        </div>
                        

                        <div className="App">
                            <p>Category</p>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                       
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn hover:bg-[#071f17] bg-[#1B4D3E] btn-primary">Add Toy </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToys;