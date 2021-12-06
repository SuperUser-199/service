import logo from "../logo.svg";
import Header from "../components/header"
import './home.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllProfs } from "../actions/userActions";
import { useNavigate } from "react-router";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated  } = useSelector(state => state.user);

  const handleClick = (e) => {
    dispatch(getAllProfs());
    navigate('/allusers');
  }

  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <span id="main-logo">ServiceFare </span> <br />
            </h1>
            <h3>
            Website is under construction we will be starting our service from 1
            Jan 2022 </h3>
          
        </header>
        {
          isAuthenticated   && <button id="user-button" onClick={handleClick}>All Users</button>
        }
      </div>
      
    </>
  );
}
