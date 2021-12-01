import React, { useState } from 'react'
import './Register.css'
import Header from "../components/header"
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Signup() {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        pwd: "",
        confirmpwd: ""
    })

    const handleUser = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name] : value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.pwd === user.confirmpwd) {
            axios.post('/signup', {email : user.email, pwd: user.pwd, cpwd: user.confirmpwd})
            .then(res => {
                if (res && res.status === 200) {
                    console.log(res.data.message);
                    history.push('/service-menu');
                }
            })
            .catch(err => {
                console.log(err);
                window.alert('Registration unsuccessfull! An unexpected error occured at the server');
            });
        } else {
            window.alert('Registration unsuccessfull\nPassword didn\'t match!');
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
                <h2 className="heading2">Signup</h2>
                <form autocomplete="off" className="regForm" onSubmit={handleSubmit}>
                    <input type="email" name="email" id="register-ml" required placeholder="Enter your Email" onChange={handleUser}/>
                    <input type="password" name="pwd" id="register-pd" required placeholder="Enter your password" onChange={handleUser}/>
                    <input type="password" name="confirmpwd" id="register-cpd" required placeholder="Confirm your password" onChange={handleUser}/>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit" className="reg-btn">SignUp</button>
                    <p className="account">Do you have an account? <a href="/login" className="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Signup
