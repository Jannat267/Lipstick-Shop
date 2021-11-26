import React from 'react';
import useProducts from '../../hooks/useProducts';
import Banner from '../Home/Banner/Banner';
import Product from '../Product/Product';
import Navigation from '../Shared/Navigation/Navigation';
import './Allproduct.css';

const AllProducts = () => {
    const [products] = useProducts();

    return (
     <div className='bg-danger'>
        <Navigation></Navigation>
        <section className='my-5'>
		<div className="container">
			<h1 className='text-center'>Best Seller</h1>
			<div className="row row-cols-1 row-cols-md-3  g-2">
			{
			products.map(product => <Product key={product._id} product ={product}></Product> )
			}
            {/* {loading&&
			<div class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
			</div>
			</div>} */}
			</div>
		</div>
		</section>
            
    </div>
    );
};

export default AllProducts;