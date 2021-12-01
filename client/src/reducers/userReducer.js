import { CLEAR_ERRORS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
        default:
            return state;
    }
}