import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Store/Store.css"

const Store = ({ store }) => {
    const { _id, name, image, description, price, quantity, supplierName } = store;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top image " alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <h5 className="card-title">Price :{price}</h5>
                    <h5 className="card-title">Quantity :{quantity}</h5>
                    <h5 className="card-title">Supplier Name :{supplierName}</h5>
                    <p className="card-text">Description : {description}</p>
                </div>
                <div>
                    <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-primary d-block w-50 mx-auto mb-2'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Store;