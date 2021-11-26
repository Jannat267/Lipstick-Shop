import React from 'react';
import { useHistory } from 'react-router';

const ProductEdit = (props) => {
    //const [status,setStatus]=useState('');
    const product=props.product;
    
    const{_id,name,price,shade}=product;
    const history=useHistory();
   //const {_id,name,img} = myorder;
   const handleDeleteOrder=id=>{
       console.log(id)
    const confirm = window.confirm("Are you sure to delete?");
   const url=`https://morning-beyond-34496.herokuapp.com/products/${id}`;
   if(confirm){
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    alert("Product has been deleted");
    //window.location.reload(false);
   }
}
   const handleUpdateOrder=id=>{
    console.log("update  hit",id);
   const url=`https://morning-beyond-34496.herokuapp.com/orders/${id}`;
   fetch(url,{
       method:'PUT'
   })
   .then(res=>res.json())
   .then(data=>
    {
        
    })
    //history.push('./home');
    alert("Order Status Updated");
    
}
   
   
    return (
        <div>
         
        <div className="col">
        <div className="card mt-2 shadow-lg h-50">
        <div className="card-body">
        <div className="row manage-order text-dark">
        <div className="col-md-4">
        <p><span className="d-md-none">Product name: </span>{name}</p>
        </div>
        <div className="col-md-4">
            <p><span className="d-md-none">Shade: </span>{shade}</p>
        </div>
        <div className="col-md-3 text-start">
            <p><span className="d-md-none">Price : </span>$ {price}</p>
        </div>
    
        <div className="col-md-1 d-flex justify-content-center align-items-center mx-auto">
            <button onClick={() => handleDeleteOrder(_id)} className="btn btn-danger "><i class="fas fa-trash-alt"></i></button>
           
        </div>
        </div>
    
        </div>
        </div>
        </div>
        </div>
    );
};

export default ProductEdit;