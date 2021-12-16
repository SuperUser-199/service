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
          <div>
            {orders &&
              orders.map((item) => (
                <div
                  className="alert alert-success"
                  role="alert"
                  key={item.order._id}
                >
                  <h4 className="alert-heading">
                    <span id="left-krdo">Order Id:{item.order._id}</span>{" "}
                    <span id="right-krdo">
                      {item.order.placedAt.toString().substr(0, 10)}
                    </span>
                  </h4>
                  <br />
                  <p>
                    <span id="left-krdo">{item.order.service.name}</span>
                    <span id="right-krdo">
                      Total Price: &#8377; {item.order.totalCost}
                    </span>
                  </p>
                  <br />
                  <hr />
                  <p className="mb-0">
                      <button id="order-btn" className="btn btn-light" onClick={() => handleTrackOrder(item.order._id)}>
                        Track Order
                      </button>
                    <a href={`/updateorder/${item.order._id}`}>
                      <button id="order-btn" className="btn btn-light">
                        Update Order
                      </button>
                    </a>
                  </p>
                </div>
              ))}
          </div>
        </>
  );
}

export default ProfessionalOrders;
