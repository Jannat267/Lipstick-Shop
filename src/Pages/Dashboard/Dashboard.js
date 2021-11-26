import * as React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import DashboardHome from './DashboardHome/DashboardHome';
import { BrowserRouter as Router,Switch,Route,useParams,useRouteMatch } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './makeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute';
import './Dashboard.css'
import MyOrder from './MyOrder/MyOrder';
import Review from './Review/Review';
import Payment from './Payment/Payment';

const Dashboard = () => {
  let{path,url}=useRouteMatch();
  const {admin,user,logout}=useAuth();
    return (
       <div>
        <div className='p-2 mx-auto bg-dark text-center'>
          <h1 className=' fs-1 text-white'>Dashboard</h1>
        </div>
          <div className='row'>
          
            <div className='col-3 bg-dark '>
              <ul>
              <li>
        <i class="fas fa-home"></i><Link to='/home'className="text-white fs-1">Home</Link>
    </li>
    <li>
    <i class="fas fa-tachometer-slowest"></i><Link to={`${url}`}className="text-white fs-1">Dashboard</Link>
    </li>
              </ul>
   {
    //  admin accessable features
     admin?
     <ul>
        <li>
        <i class="fas fa-plus-square"></i> <Link to={`${url}/addProduct`} className="text-white fs-1">Add Product</Link>
        </li>
        <li>
        <i class="fas fa-user-shield"></i> <Link to={`${url}/makeAdmin`}className="text-white fs-1">Make Admin</Link>
        </li>
        <li>
        <i class="fas fa-edit"></i> <Link to={`${url}/manageProducts`}className="text-white fs-1">Manage Products</Link>
        </li>
        <li>
        <i class="fas fa-cog"></i> <Link to={`${url}/manageOrders`}className="text-white fs-1">Manage Order</Link>
        </li>
     </ul>
     :
    //  users accessable features
      <ul>
    <li>
    <i class="fas fa-shopping-bag"></i><Link to={`${url}/myOrders/${user.email}`}className="text-white fs-1">My Orders</Link>
    </li>
    <li>
    <i class="fas fa-star-half-alt"></i><Link to={`${url}/review`}className="text-white fs-1">Review</Link>
    </li>
    <li>
    <i class="fas fa-money-bill-wave"></i> <Link to={`${url}/payment`} className="text-white fs-1">Payment</Link>
    </li>
      </ul>
   }
   <ul> 
     
    
    <li>
     <i class="fas fa-sign-in-alt"></i> <button className="text-white fs-1 btn btn-danger" onClick={logout}>Logout</button>
    </li>
    </ul>
  
</div>
<div className='col-9'>
  
 <div className='mt-4 container-fluid'>
 <Switch>
    <Route exact path={path}>
    <DashboardHome></DashboardHome>
    </Route>
    <Route path={`${path}/myOrders/${user.email}`}>
    <MyOrder></MyOrder>
    </Route>
    <Route path={`${path}/review`}>
    <Review></Review>
    </Route>
    <Route path={`${path}/payment`}>
    <Payment></Payment>
    </Route>
    <AdminRoute  path={`${path}/makeAdmin`}>
    <MakeAdmin></MakeAdmin>
    </AdminRoute>
    <AdminRoute   path={`${path}/manageOrders`}>
    <ManageOrders></ManageOrders>
    </AdminRoute>
    <AdminRoute   path={`${path}/manageProducts`}>
    <ManageProducts></ManageProducts>
    </AdminRoute>
    <AdminRoute path={`${path}/addProduct`}>
			<AddProduct></AddProduct>
        </AdminRoute>
  </Switch>
 </div>
</div>
</div>
      </div>
    );
};

export default Dashboard;