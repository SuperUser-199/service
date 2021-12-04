import {
  CLEAR_ERRORS,
  REGISTER_PROFESSIONAL_FAIL,
  REGISTER_PROFESSIONAL_REQUEST,
  REGISTER_PROFESSIONAL_SUCCESS,
  SETUP_PROFILE_FAIL,
  SETUP_PROFILE_REQUEST,
  SETUP_PROFILE_RESET,
  SETUP_PROFILE_SUCCESS,
} from "../constants/profConstants";

export const profReducer = (state = { professional: {} }, action) => {
  switch (action.type) {
    case REGISTER_PROFESSIONAL_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_PROFESSIONAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        professional: action.payload,
      };
    case REGISTER_PROFESSIONAL_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export const setupProfProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case SETUP_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SETUP_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isSetup: action.payload,
      };
    case SETUP_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SETUP_PROFILE_RESET:
      return {
        ...state,
        isSetup: false,
      };
    default:
      return state;
  }
};