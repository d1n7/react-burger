import {baseApiURL} from "../api";
import {genRequest} from "../../utils/fetch";

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST'
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED'
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS'
export const SHOW_ORDER_INFO = 'SHOW_ORDER_INFO'
export const CLOSE_ORDER_INFO = 'CLOSE_ORDER_INFO'


const orderEndpoint = '/api/orders'

export const sendOrder = (data) => dispatch => {
    dispatch({type: SEND_ORDER_REQUEST})

    const preparedData = JSON.stringify(data)

    const address = new URL(orderEndpoint, baseApiURL).href
    const req = new Request(address, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: preparedData,
    });


    genRequest(req).then(resp => {
        dispatch({
            type: SEND_ORDER_SUCCESS,
            payload: resp.order.number,
        })
    }).catch(error => dispatch({type: SEND_ORDER_FAILED, error}));


    // fetch(address, request)
    //     .then((response) => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         dispatch({type: SEND_ORDER_FAILED, info: "Something went wrong on API server!"});
    //     })
    //     .then((response) => {
    //         console.debug(response);
    //         dispatch({type: SEND_ORDER_SUCCESS, payload: response.order.number});
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         dispatch({type: SEND_ORDER_FAILED, info: error.message});
    //     });
}