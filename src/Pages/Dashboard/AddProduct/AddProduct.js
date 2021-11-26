import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';


const AddProduct = () => {

	const {register, handleSubmit, reset} = useForm();

	const onSubmit = data => {
		console.log(data);

        axios.post('https://morning-beyond-34496.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
	}

	return (
		<div>
			<section>
				<div className="container">
				<h1 className="text-center my-5 text-dark"> Add a New <span className="text-danger">Lipstick</span> Here... </h1>
				</div>

				<div className="container">
				<form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-3" {...register("name")} placeholder="Name : " />
                <input className="form-control mb-3" {...register("shade")} placeholder="Shade : " />
                <input className="form-control mb-3" {...register("price")} placeholder="Price : $" />
                <input className="form-control mb-3" {...register("color")} placeholder="Available Shade : " />
                <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                <textarea className="form-control mb-3" {...register("description")} placeholder="description" />
                <input className="btn btn-primary"  type="submit" value="Add" />
				
            </form>
				</div>
			</section>
		</div>
	);
};

export default AddProduct;