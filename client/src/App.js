import React from 'react';
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
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App (){
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
      <Route exact path="/setupprofile" element={<Setupprofile />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/orders" element={<Orders />} />
      <Route exact path="/orderdetails" element={<Orderdetails />} />
      <Route exact path="/service-menu" element={<Detailedservice />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  );
}

export default App;
