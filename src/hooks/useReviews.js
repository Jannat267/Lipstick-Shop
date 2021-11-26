import { useEffect } from "react";
import { useState } from "react";
// hook for use products
const useReviews=()=>{
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://morning-beyond-34496.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);   
            });
    },[]);
    // return value of hook
    return [reviews]
}
export default useReviews;