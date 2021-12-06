import React from "react";
import './allusers.css';
import Header from "./header";
import { useNavigate } from "react-router";
import MetaData from "./layout/MetaData";
import { useSelector} from "react-redux";
function AllUsers(){
    const navigate = useNavigate();

    const { user, address,professional } = useSelector((state) => state.user);
    if(user.role==="user"){
        navigate("/")
      }
return(
    <>
    <Header/>
    <MetaData title="All Users" />

<div >
    <div >
      <div >
        <div >
          <table id="table-alluser">
            <thead id="table-head">
              <tr>
                <th>Candidate Name</th>
                <th >Rating</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td >
                  <div >
                    <img id="user-img" src={user.avatar.url} alt="" />
                  </div>
                  <div >
                    <div >
                      <div >
                        <h5 >{user.name}</h5>
                      </div>
                      <div>
                        <ul >
                          <li><i class="fas fa-filter pr-1"></i>{professional.specialization}</li>
                          <li><i class="fas fa-map-marker-alt pr-1"></i>{address.city},{address.district},{address.state},{address.pincode}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
                <td id="user-td">
                    <span >5</span>
                    <img id="star-img" alt="star"src="https://img.icons8.com/fluency/48/000000/star.png"/>
                  
                </td>
                <td id="user-td">
                <a href="#" data-toggle="tooltip" title="" data-original-title="view"><button id="viewprofilebtn">View Profile</button></a>
                  
                </td>
              </tr>
              
              
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  </div>

    </>
)
}

export default AllUsers;
