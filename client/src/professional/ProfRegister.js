import React, {  useState } from "react";

import './ProfRegister.css';
import Header from "../components/header";
import Profile from "../images/Profile.png";

function Register() {
    const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(Profile);

  const imgDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div class="container-pro-reg">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2>Professional Registration</h2>
                <form autocomplete="off" className="proRegForm">
                    <input type="text" name="reg-fname" id="reg-fname" required placeholder="Enter your Name"/>
                    <input type="email" name="register-ml" id="register-ml" required placeholder="Enter your email"/>
                    <input type="password" name="register-pd" id="register-pd" required placeholder="Enter your password"/>
                    <div id="registerImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={imgDataChange}
                    />
                  </div>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit" className="reg-btn">Register</button>
                    <p className="account">Do you have an account? <a href="/login" class="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Register
