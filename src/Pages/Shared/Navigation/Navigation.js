import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
const Navigation = () => {
  const{user,logout}=useAuth();
    return (
        <div className='row row-cols-1'>
          <div className='col-12'>
          <nav>
  <ul>
    <li>
      <NavLink to='/home'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/allProducts'>Explore</NavLink>
    </li>
   
    {
 user.displayName &&
 <li>
   <NavLink to='/dashboard'>Dashboard</NavLink>
 </li>
    }
    <li>
      <NavLink to='/contact'>Contact</NavLink>
    </li>
   {
 user.displayName?
 <li>
 <button onClick={logout} className='btn btn-danger'>Logout</button>
</li>:
    <li>
      <NavLink to='/login'>Login</NavLink>
    </li>
}
   
  </ul>
</nav>
          </div>
           
        </div>
    );
};

export default Navigation;