import {orderAddress} from "../api";
import {genRequest} from "../../utils/fetch";

export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SHOW_ORDER_INFO = "SHOW_ORDER_INFO";
export const CLOSE_ORDER_INFO = "CLOSE_ORDER_INFO";


export const sendOrder = (data) => (dispatch) => {
    dispatch({type: SEND_ORDER_REQUEST});

    const req = new Request(orderAddress, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    genRequest(req)
        .then((resp) => {
            dispatch({
                type: SEND_ORDER_SUCCESS,
                payload: resp.order.number,
            });
        })
        .catch((error) => dispatch({type: SEND_ORDER_FAILED, error}));
};
