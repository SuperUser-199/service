import React, { useEffect } from 'react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login  from './users/login';
import Profile from './users/profile';
import EditProfile from './users/editprofile';
import UpdatePassword from './users/updatepassword';
import Forgotpassword from './components/Forgotpassword';
import Setupprofile from './users/setupprofile';
import Orders from './product/orders';
import Orderdetails from './product/orderdetails';
import Detailedservice from './product/detailedservice';
import Cart  from './product/cart';
import ProfRegister from './professional/ProfRegister';
import ProfessionalProfile from './professional/ProfessionalProfile';
import Signup from './users/Signup';
import ResetPassword from './users/ResetPassword';
import AllUsers from './components/allusers';
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import store from './store';
import { loadUser } from './actions/userActions';
import ProtectedRoute from './components/Route/ProtectedRoute';
import ProfessionalRoute from './components/Route/ProfessionalRoute';

function App (){

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return( 
    <Router>
      <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route exact path="/allusers" element={<ProfessionalRoute component={AllUsers}/>}/>
      <Route exact path="/signup" element={<Signup />} />  
      <Route exact path="/proregister" element={<ProfRegister />} />
      <Route exact path="/professionalprofile" element={<ProfessionalRoute component={ProfessionalProfile} />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgotpassword" element={<Forgotpassword />} /> 
      <Route exact path="/resetpassword/:token" element={<ResetPassword />} /> 
      <Route exact path="/setupprofile" element={<ProtectedRoute component={Setupprofile} />} />
      <Route exact path="/profile" element={<ProtectedRoute component={Profile} />} />
      <Route exact path="/editprofile" element={<ProtectedRoute component={EditProfile} /> } />
      <Route exact path="/updatepassword" element={<ProtectedRoute component={UpdatePassword} />}/>
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
