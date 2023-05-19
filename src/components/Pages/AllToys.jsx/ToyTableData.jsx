import { Link } from "react-router-dom";

const ToyTableData = ({ toy }) => {
    const { name, price, _id, quntity, sellerName, category } = toy
    return (
        <tr className=" hover">
            <th>{sellerName}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{category[0]?.categoryName}</td>
            <td>{quntity}</td>
            <Link to={`/toy/${_id}`}>
                <button className=" btn mt-3 font-bold hover:bg-green-900 bg-green-700">View Details</button>
            </Link>
        </tr>
    );
};

export default ToyTableData;