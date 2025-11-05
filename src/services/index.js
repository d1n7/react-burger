import {combineReducers} from "redux";
import {ingredientsReducer} from "./reducers/ingredients";
import {burgerReducer} from "./reducers/burger";
import {orderReducer} from "./reducers/order";
import {infoReducer} from "./reducers/info";
import {formForgotReducer} from "./reducers/forgot";
import {passwordResetReducer} from "./reducers/reset";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    burger: burgerReducer,
    order: orderReducer,
    infoModal: infoReducer,
    forgotForm: formForgotReducer,
    resetForm: passwordResetReducer,
});
