const { PLACE_SERVICE_ORDER_REQUEST, PLACE_SERVICE_ORDER_SUCCESS, PLACE_SERVICE_ORDER_FAIL, CLEAR_ERRORS } = require("../constants/orderConstants");

export const placeOrderReducer = (state = {order: {}}, action) => {
    switch (action.type) {
        case PLACE_SERVICE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            };
        
        case PLACE_SERVICE_ORDER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                order: action.payload.order
            }
        
        case PLACE_SERVICE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}