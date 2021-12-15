import axios from 'axios';
import { PLACE_SERVICE_ORDER_FAIL, PLACE_SERVICE_ORDER_REQUEST, PLACE_SERVICE_ORDER_SUCCESS } from '../constants/orderConstants';

export const placeOrder = (data) => async (dispatch) => {
    try {
        dispatch({ type: PLACE_SERVICE_ORDER_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };
      
        const { data: result } = await axios.post(`/api/v1/order/new`, { professional: data.professional, service: data.service, paymentMode: data.paymentMode }, config);
        dispatch({ type: PLACE_SERVICE_ORDER_SUCCESS, payload: result });
    } catch (error) {
        dispatch({ type: PLACE_SERVICE_ORDER_FAIL, payload: error.response.result.message });
    }
} 