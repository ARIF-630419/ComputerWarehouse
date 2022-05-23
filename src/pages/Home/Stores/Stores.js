import React, { useEffect, useState } from 'react';
import Store from '../Store/Store';

const Stores = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        fetch("https://fierce-cove-84666.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setStores(data))
    }, []);
    const sixStores = stores.slice(0, 6);
    return (
        <div className='container mt-5'>
            <h2 className=' text-primary text-center'>In Stock</h2>
            <div className='row'>
                {
                    sixStores.map(store => <Store
                        key={store._id}
                        store={store}
                    ></Store>)
                }
            </div>
        </div>
    );
};

export default Stores;