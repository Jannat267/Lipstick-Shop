import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.jpg'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        console.log(loginData)
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
       <div className="d-flex">
            <div className='login-form  d-flex justify-content-center align-items-center col-6'>
        <div className=' mt-5'>
        <h2 className='my-4 text-dark text-center'>Login</h2>
        {/* login form */}
        <form onSubmit={handleLoginSubmit} className='form-group'>
        
        <input type='email' className=' bg-light  px-3 border-1 form-control' placeholder='Email :' onBlur={handleOnChange} name='email' required />
            <br/>
            <input type='password' className=' bg-light px-3 border-1 form-control' placeholder='Password :' onBlur={handleOnChange} name='password' required/>
            <br/>
            <div className='d-grid gap-2'>
                {/* submit button */}
            <input type='submit' value='submit' className='submit mt-2 btn btn-danger text-center py-1 fs-4' />
            </div>
            </form>
            
            <div className='mt-1 fs-3 text-info'>----------or---------</div>
            <div className='d-grid gap-2'>
                {/* google signIn button */}
            <button type='submit' className='submit mt-2 btn btn-primary text-center py-1 fs-4' onClick={handleGoogleSignIn}>Sign In with Google</button>
            </div>
           
            <p className='mt-4 fs-3 text-info'><Link to='/register'>Create New Account
            </Link></p>
        </div>  
       </div>
       <div className="col-6">
          
           <img src={login} className="img-fluid" alt=
           "" />
       </div>
       </div>
    );
};

export default Login;