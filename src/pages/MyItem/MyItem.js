import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Item from '../../Item/Item';
import axiosPrivate from '../../api/axiosPrivate';
import { useNavigate } from 'react-router-dom';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            console.log('email', email);
            const url = `https://fierce-cove-84666.herokuapp.com/MyItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://fierce-cove-84666.herokuapp.com/MyItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='container mt-5'>
            <h2 className=' text-primary text-center'>My Items</h2>
            <div className='row'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default MyItem;