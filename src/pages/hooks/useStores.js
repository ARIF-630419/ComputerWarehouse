import { useEffect, useState } from "react";

const useStores = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inventory")
            .then(res => res.json())
            .then(data => setStores(data))
    }, []);
    return [stores, setStores]
}
export default useStores;