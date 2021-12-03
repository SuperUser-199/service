import { CLEAR_ERRORS, REGISTER_PROFESSIONAL_FAIL, REGISTER_PROFESSIONAL_REQUEST, REGISTER_PROFESSIONAL_SUCCESS } from "../constants/profConstants";

export const profReducer = (state = {professional: {}}, action) => {
    switch (action.type) {
        case REGISTER_PROFESSIONAL_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case REGISTER_PROFESSIONAL_SUCCESS: 
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                professional: action.payload
            };
        case REGISTER_PROFESSIONAL_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }
        default:
            return state;
    }
}