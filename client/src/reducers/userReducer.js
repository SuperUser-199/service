import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_RESET, UPDATE_PROFILE_SUCCESS } from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case REGISTER_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case REGISTER_USER_FAIL:
        case LOGIN_FAIL:
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

export const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_PROFILE_RESET:
            return {
                ...state,
                isUpdated: false
            };
        default:
            return state;
    }
}