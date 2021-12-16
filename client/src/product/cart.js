import React, { useEffect } from "react";
import "./cart.css";
import Header from "../components/header";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, deleteServicesFromCart, getServicesFromCart } from "../actions/cartActions";
import Loader from "../components/layout/Loader/Loader";

function Cart() {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, services, success } = useSelector(
    (state) => state.servicesInCart
  );

  let totalPrice = 0;

  services &&
    services.forEach((service) => {
      totalPrice += service.price;
    });

  useEffect(() => {
    dispatch(getServicesFromCart());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success('Service removed successfully');
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
                    <th scope="col">Remove</th>
                    <th scope="col">Select</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services &&
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
                        <td>
                          <button id="cart-btn" class="btn btn-outline-danger" onClick={() => dispatch(deleteServicesFromCart(service.id))}>
                            Remove
                          </button>
                        </td>
                        <td>
                          <a href={`/selectprofessional?category=${service.category}&serviceId=${service.id.toString()}`}>
                          <button id="cart-btn">
                            Select
                          </button>
                          </a>
                        </td>
                        <td>&#8377;{service.price}</td>
                      </tr>
                    ))}
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
