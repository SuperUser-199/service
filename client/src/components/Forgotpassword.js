import React from 'react'
import './ForgotPassword.css'
import Header from "../components/header"
function Forgotpass() {
    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div class="container-pass">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2>Forgot Password</h2>
                <form autocomplete="off">
                    <input type="email" name="register-ml" id="register-ml" required placeholder="Enter your Email"/>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit">Submit</button>
                    <p>Do you have an account? <a href="/login" class="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Forgotpass
