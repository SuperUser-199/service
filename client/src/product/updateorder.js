import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateOrderStatus } from "../actions/orderActions";
import { clearErrors } from "../actions/userActions";
import Header from "../components/header";
import Loader from "../components/layout/Loader/Loader";
import MetaData from "../components/layout/MetaData";
import "./updateorder.css";

function UpdateOrder() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { error, loading, success, order } = useSelector(
    (state) => state.newOrder
  );
  
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      status,
      description,
      value
    }

    dispatch(updateOrderStatus(data, id));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      console.log(order);
      alert.success("Order updated successfully");
      navigate("/orders");
    }
  }, [error, success, alert, dispatch, order, navigate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Update Order"} />
          <Header />
          <div>
            <div>
              <div className="setup">
                <h2 className="setup-head2">Update Order</h2>
                <form onSubmit={handleSubmit}>
                  <div className="select-style">
                    <select id="status" name="status" required value={status} onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Update Status</option>
                      <option value="Order Placed">Order Placed</option>
                      <option value="Arriving">Arriving</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="number"
                      name="value"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      required
                      placeholder="Enter Updated Price"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      placeholder="Description for price updation"
                    />
                  </div>
                  <div className="btn-container">
                    <button
                      type="submit"
                      id="order-btn"
                      style={{ marginRight: "3px" }}
                    >
                      Submit
                    </button>
                    <button
                      type="submit"
                      id="order-btn"
                      style={{ marginLeft: "3px" }}
                      onClick={() => navigate('/orders')}
                    >
                      Cancel
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

export default UpdateOrder;
