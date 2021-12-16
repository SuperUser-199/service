import React from "react";
import Header from "../components/header";
import "./professionalorder.css";
import MetaData from "../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";

function ProfessionalOrders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: User } = useSelector((state) => state.user);
  const orders = User.professional.orders;

  const handleTrackOrder = (id) => {
    dispatch(getOrderDetails(id));
    navigate(`/orderdetails/${id}`);
  }

  return (
        <>
          <MetaData title={`All Orders`} />
          <Header />
          <div className="order-cont">
            {orders &&
              orders.map((item) => (
                <div
                  className="alert alert-success"
                  role="alert"
                  key={item.order._id}
                >
                  <h5 className="alert-heading">
                    <span id="left-krdo">Order Id:{item.order._id}</span>{" "}
                    <span id="right-krdo">
                      {item.order.placedAt.toString().substr(0, 10)}
                    </span>
                  </h5>
                  <br />
                  <p>
                    <span id="left-krdo">{item.order.service.name}</span>
                    <span id="right-krdo">
                      Total Price: &#8377; {item.order.totalCost}
                    </span>
                  </p>
                  <br />
                  
                  <p id="margintop-dedo">
                    <span id="left-krdo">User Name</span>
                    <span id="right-krdo">Order Status: </span>
                  </p>
                  <br />
                  <p id="margintop-dedo"> 
                    <span id="left-krdo">Address</span>
                    <span id="right-krdo">Mobile Number</span>
                  </p>
                  <br/>
                 

                  <hr />
                  <div>
                    <p className="mb-0">
                        <button id="order-btn" className="btn btn-light" onClick={() => handleTrackOrder(item.order._id)}>
                          Approve
                        </button> 

                      <a href={`/updateorder/${item.order._id}`}>
                        <button id="order-btn" className="btn btn-light">
                          Cancel
                        </button>
                      </a>
                    </p>
                  </div>
                  <div>
                  <p className="mb-0">
                      <button id="order-btn" className="btn btn-light" onClick={() => handleTrackOrder(item.order._id)}>
                        Track Order
                      </button> 

                    <a href={`/updateorder/${item.order._id}`}>
                      <button id="order-btn" className="btn btn-light">
                        Update Order Status
                      </button>
                    </a>
                  </p>
                  </div>
                </div>
              ))}
          </div>
        </>
  );
}

export default ProfessionalOrders;
