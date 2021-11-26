import React from 'react';
import contact from '../../../images/contact.ea74fac0.svg'
const Contact = () => {
    return (
        <div className="container">
            <h1 className='home-title text-dark fs-1 text-center'>Contact Us</h1>
            <p className='text-dark fs-1 text-center'>We'd love to hear from you</p>
            <div className='container p-2 mb-4 row row-cols-1 row-cols-md-2'
        >
            <div className='p-2 contact text-start col-md-6 col-10 text-dark'>
            <h2> <i className="fas fa-map-marker-alt"></i> Address</h2>
                <p>Dhanmondi,Dhaka.Bangladesh</p>
                <h2> <i className="fas fa-envelope-open-text"></i> Email</h2>
                <p>cookbook1@gmail.com</p>
                <h2> <i className="fab fa-facebook-square"></i> Facebook</h2>
                <p>www.facebook.com/cookbook</p>
                <h2> <i className="fas fa-phone-square-alt"></i> Phone</h2>
                <p>+88017222222</p>
            </div>
            <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>
                <img src={contact} className='img-fluid' alt='' />
            </div>

           </div>
        </div>
        
    );
};

export default Contact;