import {
  CLEAR_ERRORS,
  REGISTER_PROFESSIONAL_FAIL,
  REGISTER_PROFESSIONAL_REQUEST,
  REGISTER_PROFESSIONAL_SUCCESS,
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
      "/api/v1/user/register",
      profData,
      config
    );
    dispatch({
      type: REGISTER_PROFESSIONAL_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_PROFESSIONAL_FAIL,
      error: error.response.data.message,
    });
  }
};


// Clearing all errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
