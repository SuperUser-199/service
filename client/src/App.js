
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';
import ForgotPassword from './components/forgotpassword/forgotpassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
   <Switch>
       <Route exact path="/">
         <Home /> 
       </Route>
       <Route path="/register">
         <Register /> 
       </Route>
       <Route path="/login">
         <Login /> 
       </Route>
       <Route path="/forgotpassword">
         <ForgotPassword/>
       </Route>
     </Switch>
   </Router>
   </>
  );
}

export default App;


