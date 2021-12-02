import React from 'react'
import './profile.css'
import Header from "../components/header"
import {useSelector} from 'react-redux'

function Profile() {
    const auth = useSelector(state => state.user)
    const {user, isAuthenticated} = auth

    return (
        <>
        <Header />
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About </h3>
                            <h6 className="theme-color lead">{user.name }</h6>
                        
                                <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Joining Date</label>
                                        <p>{user.createdAt}</p>
                                    </div>
                                    
                                    <div className="media">
                                        <label>City/Village</label>
                                        <p>{user.city}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>{user.city},{user.district},{user.state},{user.pincode}</p>
                                    </div>
                                   
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>{user.mobile}</p>
                                    </div>
                                    <div className="media">
                                        <label>Gender</label>
                                        <p>{user.gender}</p>
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
