import {
	CLOSE_INGREDIENT_INFORMATION,
	SHOW_INGREDIENT_INFORMATION,
} from "../actions/info";

const initialState = {
	visible: false,
	ingredient: {},
};

export const infoReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLOSE_INGREDIENT_INFORMATION:
			return initialState;
		case SHOW_INGREDIENT_INFORMATION:
			return {
				...state,
				visible: true,
				ingredient: action.ingredient,
			};
		default:
			return state;
	}
};
