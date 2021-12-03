import React from "react";
import "./updatepassword.css";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";

function UpdatePassword(){
return (
    <>
          <MetaData title="Update Password" />
          <Header />
          <div className="reg-body">
            <div className="container-setup">
              <div className="logo">
                <h3>Service Fare</h3>
              </div>
              <div className="setup">
                <h2 className="setup-head2">Update Password</h2>
                <form >
                <div>
                    <input
                      type="password"
                    //   value={password}
                      name="old password"
                      required
                      placeholder="Enter Old Password"
                    //   onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                    //   value={password}
                      name="new password"
                      required
                      placeholder="Enter New Password"
                    //   onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                    //   value={newpassword}
                      name="confirm new password"
                      required
                      placeholder="Confirm New Password"
                    //   onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="btn-container">
                    <button type="submit" style={{ marginRight: "3px" }}>
                      Submit
                    </button>
                    <button
                      type="submit"
                      style={{ marginLeft: "3px" }}
                    //   onClick={handleCancel}
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

export default UpdatePassword;