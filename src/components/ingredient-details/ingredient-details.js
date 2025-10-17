import React from "react";
import styles from "./ingredient-details.module.css";
import IngredientParams from "../ingredient-params/ingredient-params";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
	const ingredient = useSelector((state) => state.infoModal.ingredient);

	return (
		<div className={styles.main}>
			<img
				className={styles.image}
				alt={"фото " + ingredient.name}
				src={ingredient.image}
			/>
			<div className="text_type_main-medium pb-8 pt-2">{ingredient.name}</div>
			<div className={`${styles.params} pb-15`}>
				<IngredientParams name={"Калории,ккал"} value={ingredient.calories} />
				<IngredientParams name={"Белки, г"} value={ingredient.proteins} />
				<IngredientParams name={"Жиры, г"} value={ingredient.fat} />
				<IngredientParams
					name={"Углеводы, г"}
					value={ingredient.carbohydrates}
				/>
			</div>
		</div>
	);
};

export default IngredientDetails;
