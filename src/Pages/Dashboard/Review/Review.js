import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
	const {user,logOut} = useAuth();
	const email=user.email;
	const {register,handleSubmit,formState: { errors }, reset} = useForm();
	
	const onSubmit = data => {
        axios.post(`https://morning-beyond-34496.herokuapp.com/review`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('review added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			
			<div className="container w-50">
			<h1 className="text-center">
				Share Your Opion...</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
			<input className="form-control mb-3" type="text" {...register("name")} value={user.displayName} />
			<input className="form-control mb-3" type="text" {...register("productName")} placeholder="Products Name : " />
			<textarea
			 className="form-control mb-3" type="text" {...register("reviewDetails")} placeholder="Review Details : "/>
			<input className="form-control mb-3" {...register("rattings", { min: 1, max: 5 })} placeholder="Ratings : (1-5)" type='number'/>
			{errors.rattings &&
				<div className="container">
				<p className="text-center my-4 text-danger "><i className="fas fa-exclamation-triangle"></i> Error! Please give Rating between 1 and 5 Only</p>
				</div>}
                <input className="btn btn-primary"  type="submit" value="Submit" />
            </form>
			</div>
		</div>
	);
};

export default Review;