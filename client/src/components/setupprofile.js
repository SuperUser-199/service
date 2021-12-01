import React from 'react'
import Header from "../components/header"
import './setupprofile.css';
import MetaData from './layout/MetaData';
import { useAlert } from 'react-alert';
import { useSelector, useDispatch } from 'react-redux';
import Profile from '../images/Profile.png';

function Setupprofile() {
    const alert = useAlert();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(state => state.user);
    const { error, isUpdated, loading } = useSelector(state => state.profile);

    return (
        <>
        <MetaData title='Setup Profile'/>
        <Header />
        <div className="reg-body"> 
        <div className="container-setup">
        <div className="logo">
            <h3>Service Fare</h3>
        </div>
            <div className="setup">
                <h2 className="setup-head2">Complete your Profile</h2>
                <form autocomplete="off">
                    <label id="gender">Choose your Gender :  </label>
                    <select id="gender" >
                        <option value=''>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>

                        </select>
                        <br />
                        <br />
                        Select State: <select name="state" id="countySel" size="1">
                            <option value="" selected="selected">Select State</option>
                            </select>
                            <br />
                            <br />
                            Select District: <select name="countrya" id="stateSel" size="1">
                            <option value="" selected="selected">Please select State first</option>
                            </select>
                            <br />
                            <br />
                            Select Village/City Name: <select name="district" id="districtSel" size="1">
                            <option value="" selected="selected">Please select District first</option>
                            </select><br />
                            <br />

                    Pincode: <input type="number" name="reg-pincode" id="reg-pincode" required placeholder="Pincode" />
                    <div className="register-row">
                        
                    </div>
                    <button type="submit" className="setup-btn">Submit</button>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Setupprofile
