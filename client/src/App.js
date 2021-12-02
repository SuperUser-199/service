import React, { useEffect } from 'react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login  from './pages/login';
import Register from './pages/Register';
import Profile from './pages/profile';
import Forgotpass from './components/Forgotpassword';
import Setupprofile from './components/setupprofile';
import Orders from './components/orders';
import Orderdetails from './components/orderdetails';
import Detailedservice from './components/detailedservice';
import Cart  from './components/cart';
import ProfRegister from './pages/ProfRegister';
import ProfessionalProfile from './pages/ProfessionalProfile';
import Signup from './pages/Signup';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import store from './store';
import { loadUser } from './actions/userActions';
import ProtectedRoute from './components/Route/ProtectedRoute';

function App (){

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return( 
    <Router>
      <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />  
      <Route exact path="/signup" element={<Signup />} />  
      <Route exact path="/proregister" element={<ProfRegister />} />
      <Route exact path="/profilePro" element={<ProfessionalProfile />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgotpassword" element={<Forgotpass />} /> 
      <Route exact path="/setupprofile" element={<ProtectedRoute component={Setupprofile} />} />
      <Route exact path="/profile" element={<ProtectedRoute component={Profile} />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/orders" element={<ProtectedRoute component={Orders} />} />
      <Route exact path="/orderdetails" element={<ProtectedRoute component={Orderdetails} />} />
      <Route exact path="/service-menu" element={<ProtectedRoute component={Detailedservice} />} />
      <Route exact path="/cart" element={<ProtectedRoute component={Cart} />} />
      </Routes>
  </Router>
  );
}

export default App;
