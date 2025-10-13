import {ADD_BUN, REMOVE_BUN} from "../actions/burger";

const initialState = {
    bun: {
        "_id": "643d69a5c3f7b9001cfa093c",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    },
    fillings: [],
    price: 0
}

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: action.bun,
            }
        case REMOVE_BUN:
            return {
                ...state,
                bun: {},
            }
        default:
            return state
    }
}