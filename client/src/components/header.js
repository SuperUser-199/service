import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./header.css";
function Header() {
  const auth = useSelector((state) => state.user);

  const { user, isAuthenticated } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

    const userLink = () => {
        return <ul id="tranform-ul">
            
          
                <li><button class="btn btn-outline-success my-2 my-sm-0"><Link to="/profile">  <img class="user-avatar" src={user.avatar} alt=""/>  Profile</Link> </button></li>
                <li><button class="btn btn-outline-success my-2 my-sm-0"
                type="submit" ><Link to="/" onClick={handleLogout}> <img
                alt="..."
                class="login"
                src="https://img.icons8.com/fluency/64/000000/login-rounded-right.png"/>Logout</Link></button>
              </li>
           
        </ul>
    }

  const transForm = {
    transform: isAuthenticated ? "translateY(-1px)" : 0,
  };

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img class="navbar-logo" src="./logo192.png" alt="" />
          ServiceFare
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/profile">
                Profile
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/orders">
                  Orders
                </a>
                <a class="dropdown-item" href="/setupprofile">
                  Set Up Profile
                </a>
                <a class="dropdown-item" href="/forgotpassword">
                  Forgot Password
                </a>
                <a class="dropdown-item" href="/services">
                  Detailed Service
                </a>
                <a class="dropdown-item" href="/proregister">
                  Professional Registration
                </a>
                <a class="dropdown-item" href="/professionalprofile">
                  Professional Profile
                </a>
              </div>
            </li>
          </ul>
          <a class="nav-link" href="/cart">
            <img
              alt="..."
              class="cart"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-cart-grocery-flatart-icons-solid-flatarticons.png"
            />
            Cart
          </a>
          <div id="ul-div">
          <ul id="tranform-ul" style={transForm}>
            {
              isAuthenticated 
              ? userLink() :
              <li>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <Link to="/login">
                    <i className="fas fa-user"></i>
                    <img
                      class="login"
                      alt="..."
                      src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-1.png"
                    />
                    Sign in
                  </Link>
                </button>
              </li>
            }
          </ul>
          </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;
