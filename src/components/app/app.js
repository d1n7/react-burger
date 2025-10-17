import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
	const dispatch = useDispatch();
	const { ingredientsRequestFailed } = useSelector(
		(state) => state.ingredients.ingredientsRequestFailed,
	);

	useEffect(() => {
		dispatch(getIngredients());
	}, [dispatch]);

	useEffect(() => {
		if (ingredientsRequestFailed) {
			throw new Error(ingredientsRequestFailed);
		}
	}, [ingredientsRequestFailed]);

	return (
		<>
			<AppHeader />
			<div className={styles.panel}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor />
				</DndProvider>
			</div>
		</>
	);
}

export default App;
