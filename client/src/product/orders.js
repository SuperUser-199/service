import React from "react";
import Header from "../components/header";
import "./order.css";
import MetaData from "../components/layout/MetaData";
import { useSelector } from "react-redux";

function Orders() {
  const { user } = useSelector((state) => state.user);
  const orders = user.professional.orders;
  return (
    <>
      <MetaData title={`${user.name}'s Orders`} />
      <Header />
      <div>
        {orders &&
          orders.map((val) => (
            <div className="alert alert-success" role="alert" key={val.order._id}>
              <h4 className="alert-heading">
                <span id="left-krdo">Order Id:{val.order._id}</span>{" "}
                <span id="right-krdo">{val.order.placedAt.toString().substr(0, 10)}</span>
              </h4>
              <br />
              <p>
                <span id="left-krdo">{val.order.service.name}</span>
                <span id="right-krdo">Total Price: &#8377; {val.order.totalCost}</span>
              </p>
              <br />
              <hr />
              <p className="mb-0">
                <a href={`/orderdetails/${val.order.service._id}`}>
                  <button id="order-btn" className="btn btn-light">
                    Track Order
                  </button>
                </a>{" "}
                <a href={`/updateorder/${val.order._id}`}>
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

export default Orders;
