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
  Switch,
  Route,
} from "react-router-dom";
function App (){
  return( 
    <Router>
    <Switch>
      <Route exact path ="/">
       <Home />
      </Route>
      <Route path="/register">  
        <Register />
      </Route>
      <Route path="/signup">  
        <Signup />
      </Route>
      <Route path="/proregister">  
        <ProfRegister />
      </Route>
      <Route path="/profilePro">  
        <ProfessionalProfile />
      </Route>
      <Route path="/login">  
        <Login />
      </Route>
      <Route path="/forgotpassword">  
        <Forgotpass />
      </Route>
      <Route path="/setupprofile">
        <Setupprofile />
      </Route>
    <Route path="/profile">
        <Profile />
    </Route>
    <Route path="/dashboard">
        <Dashboard />
    </Route>
    <Route path="/orders">
        <Orders />
    </Route>
    <Route path="/orderdetails">
       <Orderdetails />
    </Route>
    <Route path="/service-menu">
      <Detailedservice />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    </Switch>
  </Router>
  );
}

export default App;
