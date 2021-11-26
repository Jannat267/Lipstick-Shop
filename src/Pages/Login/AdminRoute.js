import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// private route componant
const AdminRoute = ({children, ...rest}) => {
    const {user,isLoading,admin} =useAuth();
  console.log(isLoading);
    
  if(isLoading){
    return( 
      <div class="d-flex justify-content-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    );}
    

    return (
        <div>
    <Route
      {...rest}
      render={({ location }) =>
      
        user.email && admin? (
           children
        ) : (
          <Redirect
            to={{
              // redirect to login
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default AdminRoute;