import React from "react";
import styles from "./ingredient.module.css";
import {
	Counter,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { SHOW_INGREDIENT_INFORMATION } from "../../services/actions/info";
import { IngredientType } from "../../utils/types";

const Ingredient = ({ ingredient, count }) => {
	const dispatch = useDispatch();

	const [{ isDragging }, refDrag] = useDrag(() => ({
		type: ingredient.type,
		item: ingredient,
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	const classOnDrag = {
		opacity: 0.5,
	};

	const handleOpen = () => {
		dispatch({ type: SHOW_INGREDIENT_INFORMATION, ingredient: ingredient });
	};

	return (
		<div className={styles.block}>
			{count > 0 ? (
				<Counter
					count={count}
					size="default"
					extraClass={`${styles.counter} m-5 small`}
				/>
			) : (
				<></>
			)}
			<div
				onClick={handleOpen}
				ref={refDrag}
				className={isDragging ? classOnDrag : ""}
			>
				<img alt={ingredient.name} src={ingredient.image} />
				<div
					className={`${styles.price} text text_type_digits-default pt-1 pb-1`}
				>
					{ingredient.price}
					<CurrencyIcon type="primary" className="p-2" />
				</div>
				<div className="text text_type_main-default">{ingredient.name}</div>
			</div>
		</div>
	);
};

Ingredient.propTypes = {
	ingredient: IngredientType,
	count: PropTypes.number,
};

export default Ingredient;
