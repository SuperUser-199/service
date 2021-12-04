import {
  CLEAR_ERRORS,
  REGISTER_PROFESSIONAL_FAIL,
  REGISTER_PROFESSIONAL_REQUEST,
  REGISTER_PROFESSIONAL_SUCCESS,
  SETUP_PROFILE_FAIL,
  SETUP_PROFILE_REQUEST,
  SETUP_PROFILE_SUCCESS,
} from "../constants/profConstants";
import axios from "axios";

export const registerProf = (profData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PROFESSIONAL_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      "/api/v1/professional/register",
      profData,
      config
    );
    dispatch({
      type: REGISTER_PROFESSIONAL_SUCCESS,
      payload: data.professional,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_PROFESSIONAL_FAIL,
      error: error.response.data.message,
    });
  }
};

export const setupProfProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SETUP_PROFILE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.put(
      `api/v1/professional/setup`,
      userData,
      config
    );
    dispatch({ type: SETUP_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: SETUP_PROFILE_FAIL,
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
