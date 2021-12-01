import React from 'react'
import Header from "../components/header"
import './setupprofile.css';

function Setupprofile() {
    var stateObject = {
"Haryana": { "Gurugram": ["new Delhi", "North Delhi"],
"Faridabad": ["Thiruvananthapuram", "Palakkad"],
"Goa": ["North Goa", "South Goa"],
},
"Delhi": {
"South Australia": ["Dunstan", "Mitchell"],
"Victoria": ["Altona", "Euroa"]
}, "Rajasthan": {
"Alberta": ["Acadia", "Bighorn"],
"Columbia": ["Washington", ""]
},
}
window.onload = function () {
var countySel = document.getElementById("countySel"),
stateSel = document.getElementById("stateSel"),
districtSel = document.getElementById("districtSel");
for (var country in stateObject) {
countySel.options[countySel.options.length] = new Option(country, country);
}
countySel.onchange = function () {
stateSel.length = 1; // remove all options bar first
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
for (var state in stateObject[this.value]) {
stateSel.options[stateSel.options.length] = new Option(state, state);
}
}
countySel.onchange(); // reset in case page is reloaded
stateSel.onchange = function () {
districtSel.length = 1; // remove all options bar first
if (this.selectedIndex < 1) return; // done
var district = stateObject[countySel.value][this.value];
for (var i = 0; i < district.length; i++) {
districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
}
}
}
    
    
    
    return (
        <>
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
                        <option>select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

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
