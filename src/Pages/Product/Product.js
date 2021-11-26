import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const product=props.product;
    
   const {_id,name,img,price,shade,color} = product;  
   return (
   <div className="col-md-4 col-12">
    <div className="card product-card hvr-float-shadow h-100 text-center">
        <div className='d-flex justify-content-center'><img src={img} className="card-img-top" alt="..."/></div>
        <div className="card-body p-4">
            <h4 className="card-title text-dark fw-bold">{name}</h4>
            <p className="card-text text-dark">{shade}</p>
            <p>Rating: <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
            <h5 className="card-text text-center">Price: <span className="text-danger">${price}</span></h5>
            <Link to={`/buyNow/${name}`}><button className="btn btn-dark my-3">Buy Now  <i className="fas fa-shopping-bag"></i></button></Link>
        </div>
     </div>
    </div>

      
   );
};

export default Product;