import {
    CLOSE_ORDER_INFO,
    SEND_ORDER_FAILED,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
} from "../actions/order";

const initialState = {
    visible: false,
    orderRequest: false,
    orderRequestFail: false,
    orderRequestSuccess: false,
    order: null,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
            }
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                orderRequest: false,
                orderRequestSuccess: true,
                visible: true,
                order: action.payload,
            }
        case SEND_ORDER_FAILED:
            return {
                ...state,
                orderRequest: false,
                orderRequestFail: true,
            }
        case CLOSE_ORDER_INFO:
            return {
                ...state,
                visible: false,
                order: null,
            }
        default:
            return state;
    }
}