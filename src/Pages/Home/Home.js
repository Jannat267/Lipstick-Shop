import React, { useState } from 'react';
import Product from '../Product/Product';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import'./Banner/Banner.css';
import useProducts from '../../hooks/useProducts';
import useReviews from '../../hooks/useReviews';
import user from '../../images/user.png';
import './Home.css'
import Contact from './contact/Contact';

const Home = () => {
	const [products] = useProducts();
	const [reviews] = useReviews();
	const bestProducts=products.slice(0,6);
    
    return (
		<div>
        <div className='banner'>
        <Navigation></Navigation>
          {/* header with banenr */}
			<Banner></Banner>
		</div>
		<section className='my-5'>
		<div className="my-5">
			<h1 className='text-center text-dark'>Best Seller <span className='text-danger'>Lipsticks</span> </h1>
			</div>
			<div className="container mt-5">
		<div className="row row-cols-md-3 row-cols-1 ">

		{
			bestProducts.map(product=> <Product
			product={product} key={product._id}></Product>)
		}

		</div>
			</div>
		</section>
		{/* review section */}
		<section className='customers-review my-5'>
			<div className='container w-75'>
				<h1 className='mb-5 text-center text-danger fw-bold fs-1'>What Do Our Customers Says</h1>
				<div className='row row-cols-1 row-cols-md-3'>
					{
					reviews.map(review=>
					<div className='col-10 col-md-4'>
					<div className="card product-card hvr-float-shadow h-100 text-center">
					<div className='d-flex justify-content-center'><img src={user} className="img-fluid w-25 mt-4" alt=''/>
					</div>
				<div className="card-body p-4">
					<h4 className="card-title text-dark fw-bold">{review.name}</h4>
					
					<p className="card-text text-dark">{review.productName}</p>
					<p className="card-text text-dark">{review.reviewDetails}</p>
					{/* dynamic ratings */}
					{
						review.rattings==='1' &&
						<p>Rating: <i className="fas fa-star"></i></p>
					}
					{
						review.rattings==='2' &&
						<p>Rating: <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i></p>
					}
					{
						review.rattings==='3' &&
						<p>Rating: <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i></p>
					}
					{
						review.rattings==='4' &&
						<p>Rating: <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
					}
					
					{
						review.rattings==='5'&&
						<p>Rating: <i className="fas fa-star"></i>
						 <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i></p>
					}
				</div>
			 </div>
							</div>
							)
					}
				

				</div>

			</div>

		</section>
		<section className="contact">
			<Contact></Contact>
		</section>
		</div>
    );
};

export default Home;