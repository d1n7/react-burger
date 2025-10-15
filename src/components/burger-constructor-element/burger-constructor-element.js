import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {REMOVE_FILLING} from "../../services/actions/burger";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../burger-constructor-element/burger-constructor-element.module.css";
import points from "../../images/points.svg";
import PropTypes from "prop-types";
import {useDrag, useDrop} from "react-dnd";

const BurgerConstructorElement = ({element, isOver, index, moveElement}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const onDelete = (itemId, index) => {
        dispatch({
            type: REMOVE_FILLING,
            payload: {itemId, index},
        })
    }

    const [{isDragging}, dragRef] = useDrag({
        type: "burger-item",
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const [, dropRef] = useDrop({
        accept: "burger-item",
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            // if dragging down, continue only when hover is smaller than middle Y
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            // if dragging up, continue only when hover is bigger than middle Y
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return


            if (dragIndex === hoverIndex) {
                return;
            }
            console.log("dragIndex, hoverIndex", dragIndex, hoverIndex);
            moveElement(dragIndex, hoverIndex);

            item.index = hoverIndex; // Update the dragged item's index for subsequent hovers
        },
    });

    const dragDropRef = dragRef(dropRef(ref))

    return <div className={styles.row}
                ref={dragDropRef}
                style={{opacity: isDragging ? 0.5 : 1}}>
        <div className={`${styles.points} pl-2`}>
            <img alt={"points"} src={points}/>
        </div>
        <ConstructorElement
            text={element.name}
            price={element.price}
            thumbnail={element.image}
            extraClass={isOver ? styles.over : null}
            handleClose={() => onDelete(element._id, index)}
        />
    </div>
}

BurgerConstructorElement.propTypes = {
    element: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    }),
    isOver: PropTypes.bool,
    index: PropTypes.number,
}

export default BurgerConstructorElement;