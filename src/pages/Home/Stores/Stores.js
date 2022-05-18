import React, { useEffect, useState } from 'react';
import Store from '../Store/Store';

const Stores = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/store")
            .then(res => res.json())
            .then(data => setStores(data))
    }, []);
    return (
        <div id='store' className='container mt-5'>
            <h2 className=' text-primary text-center'>In Stock</h2>
            <div className='row'>
                {
                    stores.map(store => <Store
                        key={store._id}
                        store={store}
                    ></Store>)
                }
            </div>
        </div>
    );
};

export default Stores;