import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";
import { useAlert } from "react-alert";
import { logoutUser } from "../actions/userActions";
function Header() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
  };

  const userLink = () => {
    return (
      <ul id="tranform-ul">
        
        <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
               <img className="user-avatar" src={user.avatar.url} alt="" />  {user.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/dashboard">
                  Dashboard
                </a>
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/orders">
                  Orders
                </a>
               
                <Link to="/" onClick={handleLogout}>
              
              <img
                alt="..."
                className="login"
                src="https://img.icons8.com/fluency/64/000000/login-rounded-right.png"
              />
              Logout
            </Link>
               
               
              </div>
            </li>
      </ul>
    );
  };

  const transForm = {
    transform: isAuthenticated ? "translateY(-1px)" : 0,
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img className="navbar-logo" src="./logo192.png" alt="" />
          ServiceFare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/service-menu">
                Services
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                
                <a className="dropdown-item" href="/setupprofile">
                  Set Up Profile
                </a>
                <a className="dropdown-item" href="/forgotpassword">
                  Forgot Password
                </a>
                <a className="dropdown-item" href="/service-menu">
                  Detailed Service
                </a>
                <a className="dropdown-item" href="/proregister">
                  Professional Registration
                </a>
                <a className="dropdown-item" href="/professionalprofile">
                  Professional Profile
                </a>
              </div>
            </li>
          </ul>
            <a className="nav-link" href="/cart">
            <img
              alt="..."
              className="cart"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-cart-grocery-flatart-icons-solid-flatarticons.png"
            />
            Cart
          </a>
          <div id="ul-div">
            <ul id="tranform-ul" style={transForm}>
              {isAuthenticated ? (
                userLink()
              ) : (
                <li>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <Link to="/login">
                      <i className="fas fa-user"></i>
                      <img
                        className="login"
                        alt="..."
                        src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-1.png"
                      />
                      Sign in
                    </Link>
                  </button>
                </li>
              )}
            </ul>
          </div>
        
        </div>
      </nav>
    </header>
  );
}

export default Header;
