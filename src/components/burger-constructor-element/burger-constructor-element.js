import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FILLING } from "../../services/actions/burger";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor-element/burger-constructor-element.module.css";
import points from "../../images/points.svg";
import PropTypes from "prop-types";
import { useDrag, useDrop } from "react-dnd";
import { IngredientType } from "../../utils/types";

const BurgerConstructorElement = ({ element, isOver, index, moveElement }) => {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const onDelete = (itemId, index) => {
		dispatch({
			type: REMOVE_FILLING,
			payload: { itemId, index },
		});
	};

	const [{ isDragging }, dragRef] = useDrag({
		type: "burger-item",
		item: { index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, dropRef] = useDrop({
		accept: "burger-item",
		hover(item, _) {
			if (!ref.current) {
				return;
			}

			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}

			moveElement(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});

	const dragDropRef = dragRef(dropRef(ref));

	return (
		<div
			className={styles.row}
			ref={dragDropRef}
			style={{ opacity: isDragging ? 0.5 : 1 }}
			key={"key2"}
		>
			<div className={`${styles.points} pl-2`}>
				<img alt={"points"} src={points} />
			</div>
			<ConstructorElement
				key={"key"}
				text={element.name}
				price={element.price}
				thumbnail={element.image}
				extraClass={isOver ? styles.over : null}
				handleClose={() => onDelete(element._id, index)}
			/>
		</div>
	);
};

BurgerConstructorElement.propTypes = {
	element: IngredientType,
	isOver: PropTypes.bool,
	index: PropTypes.number,
	moveElement: PropTypes.func,
};

export default BurgerConstructorElement;
