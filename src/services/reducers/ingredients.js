import {GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, SET_CURRENT_TAB} from "../actions/ingredients";

const initialState = {
    ingredientsRequest: false,
    ingredientsRequestFailed: false,
    ingredients: [],
    error: {},
    currentTab: "bun"
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_SUCCESS:
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
                error: action.error
            }
        case SET_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.currentTab
            }
        default:
            return state;
    }
}