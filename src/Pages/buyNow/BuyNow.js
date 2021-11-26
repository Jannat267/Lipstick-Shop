import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';

const BuyNow = () =>  {
	const {user,logOut} = useAuth();
	const email=user.email;
	const {name} = useParams();
    const allProducts=useProducts();
    const clickedProduct=allProducts.find(clickedProduct=>clickedProduct.name===name);
        console.log(allProducts.find(clickedProduct=>clickedProduct._id===name));
	const {register,handleSubmit, reset} = useForm();
	
	const onSubmit = data => {
        axios.post(`https://morning-beyond-34496.herokuapp.com/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			<div className="container my-3">
			
			</div>
			<div className="container w-50">
			<form onSubmit={handleSubmit(onSubmit)}>
			<input className="form-control mb-3" type="text" {...register("title")} value={name} />
                
                <input type="email" className="form-control mb-3" {...register("email")} value={email} />
				<input className="form-control mb-3" {...register("name")} placeholder="Full Name" value={user.displayName}/>
				<input className="form-control mb-3" {...register("status")} placeholder="Full Name" value="pending" type="hidden"/>

                <input type="text" className="form-control mb-3" {...register("address")} placeholder="address" />

				<input className="form-control mb-3" {...register("phone")} placeholder="Phone" type='number'/>

                <input className="btn btn-danger"  type="submit" value="Place Order" />
            </form>
			</div>
		</div>
	);
};

export default BuyNow;