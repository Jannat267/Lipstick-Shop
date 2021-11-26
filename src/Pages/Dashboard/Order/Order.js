import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

const Order = (props) => {
    //const [status,setStatus]=useState('');
    const order=props.order;
    
    const{_id,name,title,date,email,address,description,status}=order;
    const history=useHistory();
   
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
// update order function
   const handleUpdateOrder=id=>{
    console.log("update  hit",id);
   const url=`https://morning-beyond-34496.herokuapp.com/orders/${_id}`;
   fetch(url,{
       method:'PUT'
   })
   .then(res=>res.json())
   .then(data=>
    {
        
    })
    //history.push('./home');
    alert("Order Confirmed");
    
}
   
   
    return (
    <div>
         
    <div className="col">
    <div className="card mt-2 shadow-lg h-50">
    <div className="card-body">
    <div className="row manage-order text-dark">
    <div className="col-md-2">
    <p><span className="d-md-none">Customer name: </span>{name}</p>
    </div>
    <div className="col-md-3">
        <p><span className="d-md-none">Email: </span>{email}</p>
    </div>
    <div className="col-md-3 text-start">
        <p><span className="d-md-none">Product Name: </span>{title}</p>
    </div>
    <div className="col-md-2 text-start">
        <p><span className="d-md-none">Order Status: </span>{status}</p>
    </div>

    <div className="col-md-2 d-flex justify-content-center align-items-center mx-auto">
        <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger "><i class="fas fa-trash-alt"></i></button>
        <button onClick={() => handleUpdateOrder(_id)} className="btn btn-warning "><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>

    </div>
    </div>
    </div>
    </div>
    );
};

export default Order;