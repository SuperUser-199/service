import React from 'react';
import Header from '../components/header';
import './ProfessionalProfile.css';

function ProfessionalProfile() {
    return (
        <>
            <Header />
            <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About </h3>
                            <h6 className="theme-color lead">Professionl Name</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
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
                                    <div className="media">
                                        <label>Experience</label>
                                        <p>2 Yrs</p>
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
                                    <div className="media">
                                        <label>Domain</label>
                                        <p>Service Provide Name</p>
                                    </div>
                                </div>
                                <button class="edit-profile">Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img alt="..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNTG7H8N2gOBaTKEjC_dEYZ-10zeZBWAYdaL_5eU-YP1GUHEIAEljhR4zTb_kbVj7ObE&usqp=CAU" title="" />
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Order Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">5</h6>
                                <p className="m-0px font-w-600">Rating</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
        </>
    )
}

export default ProfessionalProfile
