import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const SingleToy = () => {
    const [singleToy, setSingleToy] = useState({})
    const { id } = useParams()
    const [rating, setRating] = useState(parseInt(singleToy?.rating));

    useEffect(() => {
        fetch(`https://pijus-repo-production.up.railway.app/singleToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleToy(data)
            })
    }, [id])
    return (
        <div className="card lg:card-side h-full bg-green-100 my-16 mx-auto shadow-xl">
            <figure><img className=" h-full " src={singleToy?.photo} alt="Toy" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Name: {singleToy?.name}</h2>
                <p className=" text-xl font-bold">Seller Name: {singleToy?.sellerName} </p>
                <p className=" text-xl font-bold">Seller Email: {singleToy?.sellerEmail} </p>

                <p className="text-xl font-bold">Price: {singleToy?.price}</p>
                <p className="text-xl font-bold">Available Quantity: {singleToy?.quntity}</p>
                <p> <b className=" font-bold text-xl">Details: </b> {singleToy?.details}</p>
                <p  className="text-xl font-bold">Category: {singleToy?.category?.value}</p>

                <p>

                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                    />
                </p>
                <div className="card-actions justify-end">
                    <button className="btn text-white font-bold bg-green-600 hover:bg-green-700">Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default SingleToy;