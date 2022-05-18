import React from 'react';
import { Link } from 'react-router-dom';
import "../Store/Store.css"

const Store = ({ store }) => {
    const { name, image, description, price, quantity, supplierName } = store;
    return (
        <div className='g-5 col-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <h5 className="card-title">Price :{price}</h5>
                    <h5 className="card-title">Quantity :{quantity}</h5>
                    <h5 className="card-title">Supplier Name :{supplierName}</h5>
                    <p className="card-text">Description : {description}</p>
                </div>
                <div>
                    <Link to="/checkout" className="btn btn-primary text-center d-block ">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default Store;