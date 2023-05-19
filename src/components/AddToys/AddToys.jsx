
const AddToys = () => {
    const handleAddToys = event =>{
        event.preventDefault();

        const form = event.target 
        const subPhoto = form.subPhoto.value;
        console.log(subPhoto)
    }
    return (
        <div>
            <h1 className="text-center text-5xl font-bold ">Add Your Toy</h1>
            <form onSubmit={handleAddToys} className=" w-full  ">
                <div className=" grid grid-cols-2  ">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="photo" className="input input-bordered" />
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
                            <input type="text" name="seller" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" name="sellerEmail" placeholder="email" className="input input-bordered" />
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


                        <div className="dropdown mb-20 md:dropdown-top dropdown-left dropdown-end">
                            <label tabIndex={0} className="m-1">Sub-Category</label>
                            <ul tabIndex={0} className="dropdown-content bg-slate-300 menu p-2 shadow   rounded-box w-96">
                                <li>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="subName" placeholder="name" className="input input-bordered" />
                                </li>
                                <li>
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="subPhoto" placeholder="photo" className="input input-bordered" /></li>
                                <li>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="subPrice" placeholder="price" className="input input-bordered" />
                                </li>
                                <li>
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="subRatings" placeholder="details" className="input input-bordered" />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn hover:bg-[#071f17] bg-[#1B4D3E] btn-primary">Add Toy </button>
                </div>
            </form>
        </div>
    );
};

export default AddToys;