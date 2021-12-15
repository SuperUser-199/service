import React, { useEffect } from "react";
import Header from "../components/header";
import "./order.css";
import MetaData from "../components/layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/userActions";
import { getMyOrders } from "../actions/orderActions";
import Loader from "../components/layout/Loader/Loader";

function Orders() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, loading, orders } = useSelector((state) => state.getOrders);

  useEffect(() => {
    dispatch(getMyOrders());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [alert, error, dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`All Orders`} />
          <Header />
          <div>
            {orders &&
              orders.map((order) => (
                <div
                  className="alert alert-success"
                  role="alert"
                  key={order._id}
                >
                  <h4 className="alert-heading">
                    <span id="left-krdo">Order Id:{order._id}</span>{" "}
                    <span id="right-krdo">
                      {order.placedAt.toString().substr(0, 10)}
                    </span>
                  </h4>
                  <br />
                  <p>
                    <span id="left-krdo">{order.service.name}</span>
                    <span id="right-krdo">
                      Total Price: &#8377; {order.totalCost}
                    </span>
                  </p>
                  <br />
                  <hr />
                  <p className="mb-0">
                    <a href={`/orderdetails/${order.service._id}`}>
                      <button id="order-btn" className="btn btn-light">
                        Track Order
                      </button>
                    </a>{" "}
                    <a href={`/updateorder/${order._id}`}>
                      <button id="order-btn" className="btn btn-light">
                        Update Order
                      </button>
                    </a>
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Orders;
