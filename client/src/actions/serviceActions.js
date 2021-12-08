import axios from "axios";
import { NEW_SERVICE_FAIL, NEW_SERVICE_REQUEST, NEW_SERVICE_SUCCESS, CLEAR_ERRORS,NEW_CATEGORY_FAIL,NEW_CATEGORY_REQUEST,NEW_CATEGORY_SUCCESS } from "../constants/serviceConstants";

// Create service
export const createService = (serviceData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SERVICE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "/api/v1/service/new",
      serviceData,
      config
    );
    dispatch({
      type: NEW_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEW_SERVICE_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Create service
export const createCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATEGORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "/api/v1/service/category",
      categoryData,
      config
    );
    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Clearing all errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};