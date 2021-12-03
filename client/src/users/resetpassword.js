import React, { Fragment, useState } from "react";
import "./ResetPassword.css";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    // dispatch(resetPassword(token, myForm));
  };

  return (
    <Fragment>
      <MetaData title="Update Password" />
      <Header />
      <div className="reg-body">
        <div className="container-setup">
          <div className="logo">
            <h3>Service Fare</h3>
          </div>
          <div className="setup">
            <h2 className="setup-head2">Update Password</h2>
            <form onSubmit={resetPasswordSubmit}>
              <div>
                <input
                  type="password"
                    value={password}
                  name="password"
                  required
                  placeholder="Enter New Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                    value={confirmPassword}
                  name="confirmPassword"
                  required
                  placeholder="Confirm New Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="btn-container">
                <button type="submit" style={{ marginRight: "3px" }}>
                  Submit
                </button>
                <button
                  type="submit"
                  style={{ marginLeft: "3px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
