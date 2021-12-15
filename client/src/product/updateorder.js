import React from "react";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";
import './updateorder.css';
function UpdateOrder(){
    return(
        <>
        <MetaData title={"Update Order"} />
        <Header />
        <div>
            <div>
            <div className="setup">
                <h2 className="setup-head2">Update Order</h2>
                <form>
                <div className="select-style">
                    <select
                      id="status"
                      name="status"
                      
                    >
                      <option value="">Update Status</option>
                      <option value="arriving">Order Placed</option>
                      <option value="arriving">Arriving</option>
                      <option value="delivered">Delivered</option> 
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      
                      name="price"
                      required
                      placeholder="Enter Updated Price"
                    
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      
                      name="price"
                      required
                      placeholder="Description for price updation"
                    
                    />
                  </div>
                  <div className="btn-container">
                    <button type="submit" id="order-btn" style={{ marginRight: "3px" }}>
                      Submit
                    </button>
                    <button
                      type="submit"
                      id="order-btn"
                      style={{ marginLeft: "3px" }}
                      
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UpdateOrder;