import{
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";

//login
export const login =(email,password) => async (dispatch) => {
    try{
        dispatch({type:LOGIN_REQUEST});
        const config = {headers : { "Content-Type":"application/json"}};
        const {data} = await axios.post(
            `/api/v1/login`,
            {email,password},
            config
        );
        dispatch({type: LOGIN_SUCCESS, payload: data.user});

    } catch(error){
        console.log(error);
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }
   
};

//register
export const register = (userData) => async (dispatch) => {
    console.log(userData);
    try{
        dispatch({type: REGISTER_REQUEST});
        const config = { headers : { "Content-Type":"multipart/form-data"}};
        const {data} = await axios.post(`/api/v1/register`, userData, config);
        dispatch({type: REGISTER_SUCCESS , payload: data.user });

    }catch (error){
        dispatch({
            type:REGISTER_FAIL,
            payload:error.response.data.message,
        });
    }

};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };