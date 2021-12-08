import React from "react";
import Header from "../components/header";
import "./addservice.css";
import MetaData from "../components/layout/MetaData";
import { useSelector} from "react-redux";

import Loader from "../components/layout/Loader/Loader";

function AddService() {
    const {
        loading,
      } = useSelector((state) => state.user);
    
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Add Service" />
          <Header />
          <div className="reg-body">
            <div className="container-setup">
              <div className="logo">
                <h3>Service Fare</h3>
              </div>
              <div className="setup">
                <h2 className="setup-head2">Add Service</h2>
                <form >
                  <div className="name">
                    <input
                      type="text"
                    //   value={name}
                      name="productname"
                    //   onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter Product Name"
                    />
                  </div>
                  <div className="price">
                    <input
                      type="number"
                  
                      name="productprice"
                    //   onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter Price"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="description"
                      required
                      placeholder="Enter product description"
                    //   onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                  
                  <div>
                          <select
                            className="selectStyle"
                            id="domain"
                            name="spec"
                            // value={spec}
                            // onChange={(e) => setSpec(e.target.value)}
                          >
                            <option value="select" selected="selected">
                              ----------- select product category ------------
                            </option>
                            <option value="ACservice">
                              AC Service and Repair
                            </option>
                            <option value="painter">Painter</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="pestcontrol">Pest Control</option>
                            <option value="webdev">Web Developer</option>
                            <option value="appdev">App Developer</option>
                          </select>
                        </div>
                  <div id="registerImage">
                    {/* <img src={avatarPreview} alt="Avatar Preview" /> */}
                    <label>Upload a photo of service</label>
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                    //   onChange={imgDataChange}
                    />
                  </div>
                 
                  
                  <div className="btn-sub-can">
                    <button type="submit" style={{ margin: "0 3px 0 0" }}>
                      Submit
                    </button>      
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddService;
