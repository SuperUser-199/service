import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "./editprofile.css";
import MetaData from "../components/layout/MetaData";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { clearErrors, loadUser, setupProfile } from "../actions/userActions";
import Profile from "../images/Profile.png";

function EditProfile() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user,
    error: LoadingError,
    address,
  } = useSelector((state) => state.user);

  const [country, setCountry] = useState(address ? address.country : "");
  const [state, setState] = useState(address ? address.state : "");
  const [city, setCity] = useState(address ? address.city : "");
  const [district, setDistrict] = useState(address ? address.district : "");
  const [pincode, setPincode] = useState(address ? address.pincode : "");
  const [gender, setGender] = useState(user ? user.gender : "");
  const [phoneno, setPhoneno] = useState(user ? user.phoneno : "");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(Profile);
  const { error, isSetup } = useSelector((state) => state.profile);

  const imgDataChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const setupProfileHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("gender", gender);
    myForm.set("city", city);
    myForm.set("district", district);
    myForm.set("state", state);
    myForm.set("country", country);
    myForm.set("pincode", pincode);
    myForm.set("phoneno", phoneno);
    myForm.set("avatar", avatar);

    dispatch(setupProfile(myForm));
  };

  const handleCancel = (e) => {
    navigate("/profile");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (LoadingError) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isSetup) {
      alert.success("Profile setup successfully");
      dispatch(loadUser());
      navigate("/profile");
    }
  }, [error, alert, dispatch, navigate, isSetup, LoadingError]);

  return (
    <>
      <MetaData title="Edit Profile" />
      <Header />
      <div className="reg-body">
        <div className="container-setup">
          <div className="logo">
            <h3>Service Fare</h3>
          </div>
          <div className="setup">
            <h2 className="setup-head2">Edit your Profile</h2>
            <form onSubmit={setupProfileHandler}>
              <div className="edit-name">
                <input
                  type="text"
                  value=""
                  name="username"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="edit-email">
                <input
                  type="email"
                  value=""
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="edit-phoneno">
                <input
                  type="number"
                  value=""
                  name="phoneno"
                  required
                  placeholder="Enter your mobile number"
                />
              </div>
              <div id="registerImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={imgDataChange}
                />
              </div>
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
              <div>
                <input
                  type="number"
                  value={phoneno}
                  name="phoneno"
                  required
                  placeholder="Enter phoneno"
                  onChange={(e) => setPhoneno(e.target.value)}
                />
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
                    name="state"
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

              <div className='btn-sub-can'>
                <button type="submit" style={{margin: '0 3px 0 0'}}>
                  Submit
                </button>

                <button
                  type="submit"
                  style={{margin: '0 0 0 3px'}}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
