import React from 'react';
import useStores from '../hooks/useStores';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [stores, setStores] = useStores();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = stores.filter(store => store._id !== id);
                    setStores(remaining);
                })
        }
    }
    return (
        <div className='container mt-5'>
            <h2 className=' text-primary text-center'>All In Stock</h2>
            <div className='row'>
                {
                    stores.map(store => <ManageItem
                        key={store._id}
                        store={store}
                        handleDelete={handleDelete}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManageItems;