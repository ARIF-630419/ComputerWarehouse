import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
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
    const increaseQuantity = quantity => {
        const newQuantity = quantity - 1;
        console.log(newQuantity);
        inventory.quantity = newQuantity;

    }
    const handelQuantity = event => {
        event.preventDefault();
        const addQuantity = event.target.quantity.value;
        console.log(addQuantity);

    }
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
            <div className='m-5'>
                <button onClick={() => increaseQuantity(inventory.quantity)} className='btn btn-primary d-block w-50 mx-auto mb-2'>Delivered</button>
            </div>
            <div className=' container w-50 mx-auto'>
                <h2 className=' text-primary text-center mt-2'>Please add quantity.</h2>
                <form onSubmit={handelQuantity}>
                    <input className='d-block w-50 mx-auto m-2' type="number" name="quantity" placeholder='Enter quantity.' required />
                    <br />
                    <input className='d-block w-50 mx-auto' type="submit" value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default UpdateInventory;