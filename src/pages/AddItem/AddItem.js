import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    console.log("user", user);
    const onSubmit = data => {
        data.email = user.email;
        console.log("data", data.email);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        const item = {
            email: user?.email,
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            supplierName: data.supplierName,
            image: data.image


        }
        const Myurl = `http://localhost:5000/MyItems`;
        axios.post(Myurl, item)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Your item is store");
                }
            })

    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='m-3'>Please add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Email' type="email" readOnly disabled value={user?.email} {...register("email")} />
                <input className='mb-2' placeholder='Name' type="text" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='SupplierName' type="text"  {...register("supplierName", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;