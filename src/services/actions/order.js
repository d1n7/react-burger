export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST'
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED'
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS'
export const SHOW_ORDER_INFO = 'SHOW_ORDER_INFO'
export const CLOSE_ORDER_INFO = 'CLOSE_ORDER_INFO'

export const sendOrder = (data) => dispatch => {
    dispatch({type: SEND_ORDER_REQUEST})

    const preparedData = JSON.stringify(data)

    const request = new Request("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: preparedData,
    });

    fetch(request)
        .then((response) => {
            if (response.status !== 200) {
                dispatch({type: SEND_ORDER_FAILED, info: "Something went wrong on API server!"});
            }
            return response.json();
        })
        .then((response) => {
            console.debug(response);
            dispatch({type: SEND_ORDER_SUCCESS, payload: response.order.number});
        })
        .catch((error) => {
            console.error(error);
            dispatch({type: SEND_ORDER_FAILED, info: error.message});
        });
}