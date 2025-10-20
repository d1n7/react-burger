import { combineReducers } from "redux";
import { ingredientsReducer } from "./reducers/ingredients";
import { burgerReducer } from "./reducers/burger";
import { orderReducer } from "./reducers/order";
import { infoReducer } from "./reducers/info";

export const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	burger: burgerReducer,
	order: orderReducer,
	infoModal: infoReducer,
});
