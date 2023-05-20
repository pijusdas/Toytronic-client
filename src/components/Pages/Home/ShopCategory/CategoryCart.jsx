import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';


const CategoryCart = ({ toy }) => {
    const [rating, setRating] = useState(parseInt(toy?.rating));

  

    return (
        <div className="card mt-7 w-96 h-full bg-base-100 shadow-2xl border-y-4 border-green-500">
            <figure><img className="h-[300px]" src={toy?.photo} alt="car!" /></figure>
            <hr className=' mt-5 w-10/12 mx-auto h-1 rounded bg-green-500' />
            <div className="card-body">
                <h2 className="card-title font-bold">{toy.name}</h2>
                <p className=' text-base font-bold'>Price:{toy.price} </p>
                <div className="card-actions flex items-center">
                    <p>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            onChange={setRating}
                        />
                    </p>
                    <button className="btn bg-green-800">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;