import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    return (
        <div className='container mt-5'>
            <div className="card" style={{ width: "65rem" }}>
                <img src={inventory.image} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">Name : {inventory.name}</h5>
                    <h5 className="card-title">Price :{inventory.price}</h5>
                    <h5 className="card-title">Quantity :{inventory.quantity}</h5>
                    <h5 className="card-title">Supplier Name :{inventory.supplierName}</h5>
                    <p className="card-text">Description : {inventory.description}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;