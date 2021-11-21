import React, { useState } from 'react'
import './register.css'
import Header from "../../components/header/header"
import axios from 'axios'
function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        avatar: "",
        password: ""
    })

    const handleUser = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name] : value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (user.name  && user.email && user.avatar && user.password ) {
            axios.post('/api/v1/user/register', user)
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
                    <input type="text" name="name" id="reg-fname" required placeholder="Enter your first name" onChange={handleUser}/>
                    <input type="email" name="email" id="register-ml" required placeholder="Enter your Email" onChange={handleUser}/>
                    <input type="password" name="password" id="register-pd" required placeholder="Enter your password" onChange={handleUser}/>
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
