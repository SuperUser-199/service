import React from 'react'
import './ProfRegister.css'
import Header from "../components/header"
function Register() {
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
                    <input type="text" name="reg-fname" id="reg-fname" required placeholder="Enter your first name"/>
                    <input type="text" name="reg-lname" id="reg-lname" required placeholder="Enter your last name"/>
                    <select className="selectStyle" id="gender" name="gender">
                            <option value="select" selected="selected">-------------select your gender-------------</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                    </select>
                    <input type="email" name="register-ml" id="register-ml" required placeholder="Enter your email"/>
                    <input type="number" name="mobno" id="mobno" required placeholder="Enter your mobile number"/>
                    <select className="selectStyle" id="state" name="state">
                            <option value="select" selected="selected">-------------select your state-------------</option>
                            <option value="haryana">Haryana</option>
                            <option value="up">Uttar Pradesh</option>
                            <option value="rajasthan">Rajasthan</option>
                    </select>
                    <select className="selectStyle" id="district" name="district">
                            <option value="select" selected="selected">-------------select your district-------------</option>
                            <option value="faridabad">Faridabad</option>
                            <option value="gurugram">Gurugram</option>
                            <option value="hisar">Hisar</option>
                    </select>
                    <select className="selectStyle" id="city" name="city">
                            <option value="select" selected="selected">-----------select your city/village-----------</option>
                            <option value="abc">abc</option>
                            <option value="xyz">xyz</option>
                            <option value="cde">cde</option>
                    </select>
                    <input type="number" name="pincode" id="pincode" required placeholder="Enter your pincode"/>
                    <select className="selectStyle" id="domain" name="domain">
                            <option value="select" selected="selected">-------------select your domain-------------</option>
                            <option value="ACservice">AC Service and Repair</option>
                            <option value="painter">Painter</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="pestcontrol">Pest Control</option>
                            <option value="webdev">Web Developer</option>
                            <option value="appdev">App Developer</option>
                    </select>
                    <input type="number" name="exp" id="exp" required placeholder="Enter your experience(in years)"/>
                    <input type="password" name="register-pd" id="register-pd" required placeholder="Enter your password"/>
                    <input type="password" name="register-cpd" id="register-cpd" required placeholder="Confirm your password"/>
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
