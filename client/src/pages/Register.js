import React, { useState } from 'react'
import './Register.css'
import Header from "../components/header"
import axios from 'axios'
function Register() {

    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        mobno: "",
        pwd: "",
        confirmpwd: ""
    })

    const handleUser = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name] : value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (user.fname && user.lname && user.email && user.mobno && user.pwd && user.confirmpwd && user.pwd === user.confirmpwd) {
            axios.post('/register', user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }

    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div class="container-reg">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2 className="heading2">Register</h2>
                <form autocomplete="off" className="regForm" onSubmit={handleSubmit}>
                    <input type="text" name="fname" id="reg-fname" required placeholder="Enter your first name" onChange={handleUser}/>
                    <input type="text" name="lname" id="reg-lname" required placeholder="Enter your last name" onChange={handleUser}/>
                    <input type="email" name="email" id="register-ml" required placeholder="Enter your Email" onChange={handleUser}/>
                    <input type="number" name="mobno" id="mobno" required placeholder="Enter your mobile number" onChange={handleUser}/>
                    <input type="password" name="pwd" id="register-pd" required placeholder="Enter your password" onChange={handleUser}/>
                    <input type="password" name="confirmpwd" id="register-cpd" required placeholder="Confirm your password" onChange={handleUser}/>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit" className="reg-btn">Register</button>
                    <p className="account">Do you have an account? <a href="/login" className="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Register
