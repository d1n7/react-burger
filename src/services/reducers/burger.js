import {ADD_BUN, ADD_FILLING, CALCULATE_PRICE, REMOVE_BUN, REMOVE_FILLING} from "../actions/burger";

const initialState = {
    bun: "",
    fillings: [],
    price: 0
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUN:
            console.log(action)
            return {
                ...state,
                bun: action.bun,
            }
        case REMOVE_BUN:
            return {
                ...state,
                bun: {},
            }
        case ADD_FILLING:
            return {
                ...state,
                fillings: [...state.fillings, action.id]
            }
        case REMOVE_FILLING:
            const temp = state.fillings
            temp.splice(action.payload.index, 1)
            return {
                ...state,
                fillings: [...temp],
            }
        case CALCULATE_PRICE:
            return {
                ...state,
                price: action.price,
            }

        default:
            return state
    }
}