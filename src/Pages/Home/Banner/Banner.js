import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.gif';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <section >
				<div className="container-fluid top-banner-heading">
				<div className="row row-cols-1 row-cols-md-2">
					
					<div className="col-12 col-md-6">
				<img className="img-fluid " src={banner} alt="" />
               
				</div>
				<div className="col-12 col-md-6">
				<h1 className="heading fw-bold heading-font-size text-uppercase text-dark"><span className='text-danger'>LipstickShop</span>  <br/> To Look More Glamourous and Beautiful</h1>

				<p className="my-4 text-dark">We have built three professional cosmetic production factories with GMP standards, and has obtained the European Union GMP certificate and the United States FDA certificate .

We got 23 production and filling lines with an annual output of more than 30 million boxes of cosmetics..</p>

				<NavLink className="btn btn-danger  border border-0 px-4 py-3 my-3 explore" to='AllProducts'>
				Explore All Lipsticks
				</NavLink>
				</div>
					
                
				
				</div>
				</div>
			</section>
    );
};

export default Banner;