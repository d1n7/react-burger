import {
	ADD_BUN,
	ADD_FILLING,
	CALCULATE_PRICE,
	CLEAR_BURGER,
	MOVE_BURGER_ELEMENTS,
	REMOVE_BUN,
	REMOVE_FILLING,
} from "../actions/burger";

const initialState = {
	bun: "",
	fillings: [],
	price: 0,
};

export const burgerReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLEAR_BURGER:
			return initialState;
		case ADD_BUN:
			return {
				...state,
				bun: action.bun,
			};
		case REMOVE_BUN:
			return {
				...state,
				bun: {},
			};
		case ADD_FILLING:
			return {
				...state,
				fillings: [...state.fillings, { id: action.id, uniq: action.uniq }],
			};
		case REMOVE_FILLING:
			const temp = state.fillings;
			temp.splice(action.payload.index, 1);
			return {
				...state,
				fillings: [...temp],
			};
		case CALCULATE_PRICE:
			return {
				...state,
				price: action.price,
			};
		case MOVE_BURGER_ELEMENTS:
			const updatedFillings = [...state.fillings];
			const dragId = updatedFillings[action.payload.dragIndex];
			const hoverId = updatedFillings[action.payload.hoverIndex];
			updatedFillings[action.payload.hoverIndex] = dragId;
			updatedFillings[action.payload.dragIndex] = hoverId;
			return {
				...state,
				fillings: [...updatedFillings],
			};
		default:
			return state;
	}
};
