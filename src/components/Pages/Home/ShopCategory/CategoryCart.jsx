
const CategoryCart = ({ toy }) => {
    return (
        <div className="card w-96 h-full bg-base-100 shadow-2xl">
            <figure><img className="h-[300px]" src={toy?.photo} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
                <p>Price:{toy.price} </p>
                <div className="card-actions flex items-center">
                    <p>Ratings:{toy?.rating}</p>
                    <button className="btn bg-green-800">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;