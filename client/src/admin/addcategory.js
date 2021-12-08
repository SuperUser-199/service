import React from "react";
import Header from "../components/header";
import "./addservice.css";
import MetaData from "../components/layout/MetaData";
import { useSelector} from "react-redux";

import Loader from "../components/layout/Loader/Loader";

function AddCategory() {
    const {
        loading,
      } = useSelector((state) => state.user);
    
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Add Category" />
          <Header />
          <div className="reg-body">
            <div className="container-setup">
              <div className="logo">
                <h3>Service Fare</h3>
              </div>
              <div className="setup">
                <h2 className="setup-head2">Add Category</h2>
                <form >
                  <div className="name">
                    <input
                      type="text"
                    //   value={name}
                      name="productname"
                    //   onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter New Category Name"
                    />
                  </div>
                  <div className="url">
                    <input
                      type="number"
                  
                      name="productprice"
                      required
                      placeholder="Enter Icon Url"
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

export default AddCategory;
