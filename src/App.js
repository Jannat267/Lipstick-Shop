import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/allProduct/AllProduct';
import BuyNow from './Pages/buyNow/BuyNow';
import PrivateRoute from './Pages/Login/PrivateRoute';
import Navigation from './Pages/Shared/Navigation/Navigation';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
<Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path='/AllProducts'>
          <AllProducts></AllProducts>
        </Route>
        
        <PrivateRoute  path="/buyNow/:name">
        <Navigation></Navigation>
        <BuyNow></BuyNow>
        </PrivateRoute>
        
        <Route  path='/login'>
          <Navigation></Navigation>
          <Login></Login>
        </Route>
        
        <Route  path='/register'>
        <Navigation></Navigation>
          <Register></Register>
        </Route>
        <Route  path='*'>
        <Navigation></Navigation>
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
