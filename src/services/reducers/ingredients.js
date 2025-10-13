import {GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS} from "../actions/ingredients";

const initialState = {
    ingredientsRequest: false,
    ingredientsRequestFailed: false,
    ingredients: [],
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_SUCCESS:
            console.log(action);
            return {
                ...state,
                ingredients: action.ingredients,
                ingredientsRequestFailed: false,
                ingredientsRequest: false,
            }
        case GET_ITEMS_REQUEST:
            return {
                ...state,
                ingredientsRequest: true
            }
        case GET_ITEMS_FAILED:
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsRequestFailed: true,
            }
        default:
            return state;
    }
}