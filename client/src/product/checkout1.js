import './checkout1.css';
import React from 'react';
import Header from '../components/header';
import MetaData from "../components/layout/MetaData";
import { Link } from "react-router-dom";

function checout1(){
return(
    <>
    <Header />
    <div>
    <MetaData title="Select Professional " />
    <div>
            <div>
              <div>
                <div>
                  <table id="table-alluser">
                    <thead id="table-head">
                      <tr>
                        <th>Candidate Name</th>
                        <th>Rating</th>
                        <th>Action</th>
                        <th>Select</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      
                          <tr >
                            <td>
                              <div>
                                <img
                                  id="user-img"
                                  src=""
                                  // src="#"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div>
                                  <div><h5>"Name"</h5></div>
                                  <div>
                                    <ul id="user-ul">
                                      <li>
                                        <i className="fas fa-filter pr-1"></i>
                                        Specilization
                                      </li>
                                      <li>
                                        <i className="fas fa-map-marker-alt pr-1"></i>
                                    address
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td id="user-td">
                              <span>{5}</span>
                              <img
                                id="star-img"
                                alt="star"
                                src="https://img.icons8.com/fluency/48/000000/star.png"
                              />
                            </td>
                            <td id="user-td">
                            <Link
                                 to={`/viewprofile/`}
                                 style={{ textDecoration: "none" }}>

                                <button id="viewprofilebtn">
                                  View Profile
                                </button>
                              </Link>
                            </td>
                            <td id="user-td">
                                <button id="viewprofilebtn">
                                    Select Me
                                </button>
                            </td>
                          </tr>
                       
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
    </>
)

}
export default checout1;
