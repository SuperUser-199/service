import React from 'react'
import './profile.css'
import Header from "../components/header"
function Profile() {
    return (
        <>
        <Header />
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About </h3>
                            <h6 className="theme-color lead">Name</h6>
                            <p>BIO</p>
                                <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Birthday</label>
                                        <p>4th april 1998</p>
                                    </div>
                                    
                                    <div className="media">
                                        <label>City/Village</label>
                                        <p>Canada</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>California, USA,122004</p>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div className="media">
                                        <label>Gender</label>
                                        <p>Male</p>
                                    </div>
                                    
                                </div>
                                <button className="edit-profile">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img  alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNTG7H8N2gOBaTKEjC_dEYZ-10zeZBWAYdaL_5eU-YP1GUHEIAEljhR4zTb_kbVj7ObE&usqp=CAU" title=""/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>  
        </>
           
    )
}

export default Profile
