import { CLEAR_ERRORS, NEW_SERVICE_FAIL, NEW_SERVICE_REQUEST, NEW_SERVICE_RESET, NEW_SERVICE_SUCCESS,NEW_CATEGORY_FAIL,NEW_CATEGORY_REQUEST,NEW_CATEGORY_RESET,NEW_CATEGORY_SUCCESS } from '../constants/serviceConstants';

export const newServiceReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case NEW_SERVICE_REQUEST:
      case NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SERVICE_SUCCESS:
      case NEW_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        service: action.payload.service,
      };
    case NEW_SERVICE_FAIL:
      case NEW_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SERVICE_RESET:
      case NEW_CATEGORY_RESET:
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

export const newCategoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    
      case NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
   
      case NEW_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        category: action.payload.category,
      };
 
      case NEW_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  
      case NEW_CATEGORY_RESET:
      return {
        ...state,
        success: false,
      };
  
    default:
      return state;
  }
};
