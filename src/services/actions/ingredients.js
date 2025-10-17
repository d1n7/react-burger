import { baseApiURL } from "../api";
import { genRequest } from "../../utils/fetch";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

const ingredientsEndpoint = "api/ingredients";

const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getIngredients = () => (dispatch) => {
	dispatch({ type: GET_ITEMS_REQUEST });
	const address = new URL(ingredientsEndpoint, baseApiURL).href;

	sleep(1000).then(() => {
		try {
			genRequest(address)
				.then((resp) => {
					dispatch({
						type: GET_ITEMS_SUCCESS,
						ingredients: resp.data,
					});
				})
				.catch((error) => dispatch({ type: GET_ITEMS_FAILED, error }));
		} catch (error) {
			dispatch({ type: GET_ITEMS_FAILED, error });
		}
	});
};
