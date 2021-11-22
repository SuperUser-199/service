
import './register.css';
import Header from "../../components/header/header";
import React, {Fragment,useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";
import {useHistory,useLocation} from "react-router-dom";
import Loader from "../../components/Loader/Loader";

import { clearErrors, register } from "../../actions/userAction";

function Register() {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1]:"/";
    const dispatch = useDispatch();
    const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
    
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

 useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push('/');
    }
  }, [dispatch, error, alert, history, isAuthenticated, redirect]);

    return (
        <Fragment>
             {loading ? (
               <Loader />
           ):(
               <Fragment>
        <Header />
        <div className="reg-body"> 
        <div class="container-reg">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2 className="heading2">Register</h2>
                <form
                className="signUpForm"
               
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                 
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" className="avatar-img"/>
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
        </div>
        </div>
        </Fragment>
    )}
    </Fragment>
 )
}
export default Register
