import { useEffect, useState } from "react";

const useStores = () => {
    const [stores, setStores] = useState([]);
    useEffect(() => {
        fetch("https://fierce-cove-84666.herokuapp.com/inventory")
            .then(res => res.json())
            .then(data => setStores(data))
    }, []);
    return [stores, setStores]
}
export default useStores;