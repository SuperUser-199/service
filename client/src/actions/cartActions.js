import axios from "axios";
import {
  ADD_SERVICE_TO_CART_FAIL,
  ADD_SERVICE_TO_CART_REQUEST,
  ADD_SERVICE_TO_CART_SUCCESS,
} from "../constants/cartConstants";

// add service to cart
export const addServiceToCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADD_SERVICE_TO_CART_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/api/v1/cart/addService/${id}`, config);
    dispatch({ type: ADD_SERVICE_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_SERVICE_TO_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing all errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
