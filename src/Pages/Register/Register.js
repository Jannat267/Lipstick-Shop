import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import reg from '../../images/register.jpg';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser,signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        console.log(loginData)
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
       <div className="d-flex">
            <div className='col-6'>
           {/* signup form */}
            <div className='login-form  d-flex justify-content-center align-items-center col-md-12 col-sm-12'>
        <div className='m-3'>
        <h2 className='my-5'>Register</h2>
        <form onSubmit={handleLoginSubmit} className='form-group' >
        <input type='text' className= 'bg-light  px-3 border-1 form-control' placeholder='Name : ' required name='name' onBlur={handleOnBlur}/>
            <br/>
        <input type='email' className=' bg-light  px-3 border-1 form-control' placeholder='Email :' onBlur={handleOnBlur} name='email' required />
            <br/>
            <input type='password' className='bg-light  px-3 border-1 form-control' placeholder='Password :' onBlur={handleOnBlur} required name='password' />
            <br/>
            <input type='password' className='bg-light  px-3 border-1 form-control' placeholder='Retype Password :' onBlur={handleOnBlur} required name='password2' />
            <br/>
            {/* <p className='text-danger fw-bold fs-5'>{error}</p> */}
            <div className='d-grid gap-2'>
                {/* submit button */}
            <input type='submit' value='submit' className='submit mt-2 btn btn-danger text-center py-1 fs-4' />
            </div>
          
            </form>
            
            <div className='mt-4 fs-1 text-info'>-------or------</div>
            <div className='d-grid gap-2'>
                {/* google signIn button */}
            <button type='submit' className='submit mt-2 btn btn-primary text-center py-1 fs-4' onClick={handleGoogleSignIn}>Sign In with Google</button>
            </div>
           {/* toggler */}
            <p className='mt-4 fs-3 text-info'><Link to='/login'>Already have an account?
            </Link></p>
        </div>  
    </div>
       </div>
       <div className="col-6">
           <img src={reg} className="img-fluid" alt="" />
       </div>

       </div>
    );
};

export default Register;