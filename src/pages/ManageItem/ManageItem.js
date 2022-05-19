import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = ({ store, handleDelete }) => {
    const { _id, name, image, description, price, quantity, supplierName } = store;
    const navigate = useNavigate();

    const navigateToAddNewItem = () => {
        navigate(`/addItem`);
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
                    <button onClick={() => navigateToAddNewItem()} className='btn btn-primary d-block w-50 mx-auto mb-2'>Add New Item</button>
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary d-block w-50 mx-auto mb-2'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;