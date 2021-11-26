import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';


const MyOrder = () => {
	const{isLoading,user}=useAuth();
	const [myOrders,setMyOrders]=useState([]);
	
	// fetch data by email
    console.log(user.email);
	const url=`https://morning-beyond-34496.herokuapp.com/myOrders/${user.email}`;
    useEffect(() => {
		fetch(url)
		.then(res=>res.json())
		.then(data=>setMyOrders(data))
    }, [])
		// delete order function
	const handleDeleteOrder=id=>{
        console.log(id)
     const confirm = window.confirm("Are you sure to delete?");
    const url=`https://morning-beyond-34496.herokuapp.com/orders/${id}`;
    if(confirm){
     fetch(url,{
         method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>console.log(data))
     alert("Order Cancelled");
     //window.location.reload(false);
    }
 }
	return (
		<div className='container'>
          
       <div className='row row-cols-1'>
  					{
						myOrders.map(myorder => 
							<div>
						<div className="col">
						<div className="card pt-3 shadow-lg h-100">
						<div className="card-body">
						<div className="row manage-order">
							<div className="col">
							<p><span className="">Customer name: </span>{myorder.name}</p>
							</div>
							<div className="col">
								<p><span className="">Email: </span>{user.email}</p>
							</div>
							<div className="col">
								<p><span className="">Plan Name: </span>{myorder.name}</p>
							</div>
							<div className="col">
								<p className="text-success"><span className="">Order status: </span>{myorder.status}</p>
							</div>
						
							<div className="col-md-1 custom-btn-margin">
              <button onClick={() => handleDeleteOrder(myorder._id)} className="btn btn-danger "><i class="fas fa-trash-alt"></i></button>
							</div>
						</div>

						</div>
						</div>
						</div>
                         </div>)
					}
					</div>
					{
                        isLoading&&
                        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
                    }
					
					</div>
					// <MyOrder key={myorder._id} myorder={myorder} delete='delete'></MyOrder>
	);
};

export default MyOrder;