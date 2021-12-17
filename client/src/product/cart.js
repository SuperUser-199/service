import React, { useEffect } from "react";
import "./cart.css";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { cancelOrder, clearErrors, getServicesFromCart } from "../actions/cartActions";
import Loader from "../components/layout/Loader/Loader";

function Cart() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, services, success } = useSelector(
    (state) => state.servicesInCart
  );

  // let totalPrice = 0;

  // services &&
  //   services.forEach((service) => {
  //     totalPrice += service.price;
  //   });
  
  const handleCancelOrder = (id) => {
    dispatch(cancelOrder(id));
    window.location.reload();
  }

  useEffect(() => {
    dispatch(getServicesFromCart());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Service removed successfully");
    }
  }, [error, alert, dispatch, success]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div>
            <div className="for-cart">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Remove</th> */}
                    <th scope="col">Select</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services && services.length > 0 ? (
                    services.map((service, idx) => (
                      <tr key={service.id}>
                        <th scope="row">
                          <img
                            alt="service-img"
                            className="cart-img"
                            src={service.image.url}
                          />
                        </th>
                        <td>{service.name}</td>
                        {/* <td>
                          <button id="cart-btn" class="btn btn-outline-danger" disabled={service.isOrderAccepted !== undefined} onClick={() => dispatch(deleteServicesFromCart(service.id))}>
                            Remove
                          </button>
                        </td> */}
                        <td>
                          <a
                            href={`/selectprofessional?category=${
                              service.category
                            }&serviceId=${service.id.toString()}`}
                          >
                            <button
                              id="order-btn"
                              disabled={service.isOrderAccepted !== undefined}
                            >
                              {service.isOrderAccepted === true
                                ? "Accepted"
                                : service.isOrderAccepted === false
                                ? "Request sent"
                                : "Select Professional"}
                            </button>
                            </a>
                            <br />
                            {service.isOrderAccepted === false && (
                              <button className="btn btn-danger" id="order-btn" onClick={() => handleCancelOrder(service.id.toString())}>
                                Cancel
                              </button>
                            )}
                        </td>
                        <td>&#8377;{service.price}</td>
                      </tr>
                    ))
                  ) : (
                    <h3 id="center-it">Cart is Empty</h3>
                  )}
                </tbody>
              </table>
            </div>

            <br />
          </div>
        </>
      )}
    </>
  );
}
export default Cart;
