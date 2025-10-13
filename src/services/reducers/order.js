import {SEND_ORDER} from "../actions/order";

const initialState = {
    ingredients: [],
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER:
            return {
                ...state,
                bun: action.bun,
            }
        default:
            return state;
    }
}