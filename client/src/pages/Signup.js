import React, { useEffect, useState } from "react";
import "./Register.css";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import Profile from "../images/Profile.png";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, registerUser } from "../actions/userActions";
import MetaData from "../components/layout/MetaData";
import Loader from "../components/layout/Loader/Loader";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(registerUser(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) navigate("/service-menu");
  }, [error, dispatch, alert, navigate, isAuthenticated]);

  return (
    <>
      <MetaData title="Signup" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="reg-body">
            <div class="container-reg">
              <div class="logo">
                <h3>Service Fare</h3>
              </div>
              <div class="register-form toggle">
                <h2 className="heading2">Signup</h2>
                <form className="regForm" onSubmit={registerSubmit}>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    id="register-ml"
                    required
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    value={email}
                    name="email"
                    id="register-ml"
                    required
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    value={password}
                    name="password"
                    id="register-pd"
                    required
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div id="registerImage">
                    <img src={avatarPreview} alt="Avatar Preview" />
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={imgDataChange}
                    />
                  </div>
                  <button type="submit" className="reg-btn">
                    SignUp
                  </button>
                  <p className="account">
                    Do you have an account?{" "}
                    <a href="/login" className="switch">
                      Login Now
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
