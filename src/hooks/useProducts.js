import { useEffect } from "react";
import { useState } from "react";
// hook for use products
const useProducts=()=>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://morning-beyond-34496.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);   
            });
    },[]);
    // return value of hook
    return [products]
}
export default useProducts;