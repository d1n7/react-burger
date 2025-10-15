import {CLOSE_INGREDIENT_INFORMATION, SHOW_INGREDIENT_INFORMATION} from "../actions/info";

const initialState = {
    visible: false
}

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_INGREDIENT_INFORMATION:
            return {
                ...state,
                visible: false
            }
        case SHOW_INGREDIENT_INFORMATION:
            return {
                ...state,
                visible: true
            }
        default:
            return state
    }
}