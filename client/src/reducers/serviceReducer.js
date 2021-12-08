import { CLEAR_ERRORS, NEW_SERVICE_FAIL, NEW_SERVICE_REQUEST, NEW_SERVICE_RESET, NEW_SERVICE_SUCCESS } from '../constants/serviceConstants';

export const newServiceReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case NEW_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SERVICE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        service: action.payload.service,
      };
    case NEW_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SERVICE_RESET:
      return {
        ...state,
        success: false,
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
