import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "./setupprofile.css";
import MetaData from "./layout/MetaData";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { clearErrors, setupProfile } from "../actions/userActions";

function Setupprofile() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState(0);
  const [gender, setGender] = useState("");

  const { error, isSetup } = useSelector((state) => state.profile);

  const setupProfileHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("gender", gender);
    myForm.set("city", city);
    myForm.set("district", district);
    myForm.set("state", state);
    myForm.set("country", country);
    myForm.set("pincode", pincode);

    dispatch(setupProfile(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isSetup) {
      alert.success("Profile setup successfully");
      navigate("/profile");
    }
  }, [error, alert, dispatch, navigate, isSetup]);

  return (
    <>
      <MetaData title="Setup Profile" />
      <Header />
      <div className="reg-body">
        <div className="container-setup">
          <div className="logo">
            <h3>Service Fare</h3>
          </div>
          <div className="setup">
            <h2 className="setup-head2">Setup your Profile</h2>
            <form onSubmit={setupProfileHandler}>
              <div className="select-style">
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="select-style">
                <select
                  required
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                </select>
              </div>
              {country && (
                <div className="select-style">
                  <select
                    required
                    name='state'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">State</option>
                    {State &&
                      State.getStatesOfCountry(country).map((state) => (
                        <option key={state.isoCode} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              <div>
                <input
                  type="text"
                  value={district}
                  name="district"
                  required
                  placeholder="Enter district name"
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={city}
                  name="city"
                  required
                  placeholder="Enter city name"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  value={pincode}
                  name="pincode"
                  required
                  placeholder="Enter pincode"
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <button type="submit" className="setup-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setupprofile;
