import {
  ADD_SERVICE_TO_CART_FAIL,
  ADD_SERVICE_TO_CART_REQUEST,
  ADD_SERVICE_TO_CART_SUCCESS,
  CLEAR_ERRORS
} from "../constants/cartConstants";

export const addServiceToCartReducer = (state = { cart: {} }, action) => {
  switch (action.type) {
    case ADD_SERVICE_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SERVICE_TO_CART_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        cart: action.payload.cartInfo,
      };
    case ADD_SERVICE_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
