import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';


const ManageOrders = () => {
	const [allOrders,setOrders]=useState([]);
	// all order url
	const url=`https://morning-beyond-34496.herokuapp.com/orders`;

	useEffect(() => {
		fetch(url)
		.then(res=>res.json())
		.then(data=>setOrders(data))
    }, [])
		
		
	return (
		
          <div className='container-fluid'>
			<div className="row d-none d-md-block">
			<div className="col ">
	<div className="card pt-3 shadow-lg h-100 bg-dark text-white  ">
  <div className="card-body ">
    <div className="row manage-order">
		<div className="col-2">
			<p>Customer Name</p>
		</div>
		<div className="col-3 ">
			<p>Email</p>
		</div>
		<div className="col-3">
			<p>ProductName</p>
		</div>
		<div className="col-2">
			<p>Order Status</p>
		</div>
		<div className="col-2">
			<p>Action</p>
		</div>
	</div>
   </div>
  </div>
  </div>
  </div>
  <div className='row row-cols-1'>
  	{
	allOrders.map(order => 
	<Order order={order} key={order._id}></Order>)
	}
	</div>
	{/* {
    loading&&
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    } */}
					
	</div>
	
	);
};

export default ManageOrders;