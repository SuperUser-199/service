import React from "react";
import logo from "../../logo.svg";
import "./header.css";
function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img class="navbar-logo" src={logo} alt="" />
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
                <a class="dropdown-item" href="/service-menu">
                  Detailed Service
                </a>
                <a class="dropdown-item" href="/proregister">
                  Professional Registration
                </a>
                <a class="dropdown-item" href="/profilePro">
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
          <a href="/register">
            
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              <img
                class="login"
                alt="..."
                src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-1.png"
              />
              Register
            </button>
          </a>
          <div>
            <a href="/login">
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                <img
                  alt="..."
                  class="login"
                  src="https://img.icons8.com/fluency/64/000000/login-rounded-right.png"
                />
                Login
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
