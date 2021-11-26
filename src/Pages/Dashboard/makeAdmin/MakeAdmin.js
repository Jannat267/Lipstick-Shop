import React, { useState } from 'react';

const MakeAdmin = () => {
    const[email,setEmail]=useState('');
    const[success,setSuccess]=useState('');
    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit=e=>{
        
        const user={email};
        fetch("https://morning-beyond-34496.herokuapp.com/users/admin",{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res=>res.json()
            .then(data=>{
             if(data.modifiedCount)
                {
                    setSuccess(true);
                    setEmail('');
                }       
            }))
            
            e.preventDefault();
    }
    return (
        <div className="container w-50">
            <h1 className='fw-bold fs-1 text-dark text-center'>Make a New <span className="text-danger">Admin</span></h1>
            <form onSubmit={handleAdminSubmit}>
                <div className='d-flex'>
                <input className="form-control mb-3 rounded py-2 " type='email' placeholder='Email :' onBlur={handleOnBlur}/>
                <input type='submit' className='btn btn-danger rounded fs-bold' value='Make Admin'/>
                </div>
            </form>
            {
                success&&
                alert("A New Admin Added Successfully")
            }
        </div>
    );
};

export default MakeAdmin;