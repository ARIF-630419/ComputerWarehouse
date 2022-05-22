import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { _id } = useParams();
    const [inventory, setInventory] = useState({});
    const [quna, setQuant] = useState(0);
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    const increaseQuantity = quantity => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuant(inventory.quantity = newQuantity);
        }
    }
    const handelQuantity = event => {
        event.preventDefault();

        const addQuantity = parseInt(event.target.quantity.value);
        if (addQuantity > 0) {
            const oldQuantity = parseInt(inventory.quantity);
            const newQuantity = oldQuantity + addQuantity;
            setQuant(inventory.quantity = newQuantity);
        }
        else {
            alert("Please enter a positive number geter then 0");
        }
        event.target.reset();

    }
    return (
        <div className='container mt-5'>
            <div className='mb-5'>
                <Link to="/manageItem">
                    <button className='btn btn-primary'>Go to Manage Inventories</button>
                </Link>
            </div>

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
            <div className='m-5'>
                <button onClick={() => increaseQuantity(inventory.quantity)} className='btn btn-primary d-block w-50 mx-auto mb-2'>Delivered</button>
            </div>
            <div className=' container w-50 mx-auto'>
                <h2 className=' text-primary text-center mt-2'>Please add quantity.</h2>
                <form onSubmit={handelQuantity}>
                    <input className='d-block w-50 mx-auto m-2' type="number" name="quantity" placeholder='Enter quantity.' required />
                    <br />
                    <input className='d-block w-50 mx-auto mb-5' type="submit" value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default UpdateInventory;