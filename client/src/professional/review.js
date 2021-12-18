import React from "react";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";

function Review(){
    return(
        <>
        <MetaData title={"Review"} />
        <Header />
        <div>
        <div className="reg-body">
        <div className="container-pro-reg">
        <div className="register-form toggle">
                <h2>Review Professional Service</h2>
                <form className="proRegForm" >
                <div>
                    <select
                            className="selectStyle"
                            id="domain"
                            name="rating"
                            
                          >
                            <option value="select" selected="selected">
                              Rate professional work out of 5
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                  <input
                    type="text"
                    name="description"
                    id="register-ml"
                   
                    placeholder="Share your experience"
                  />
                 
                  
                  <div className="register-row"></div>
                  <button type="submit" className="reg-btn">
                   Submit
                  </button>
                  
                </form>
              </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Review;