import React from "react";
import styles from "./ingredient.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";

const Ingredient = ({ingredient}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const modalIngredient = <Modal header={"Детали ингредиента"} onClose={() => setModalVisible(false)}>
        <IngredientDetails ingredient={ingredient}/>
    </Modal>

    const [{isDragging}, refDrag] = useDrag(() => ({
        type: ingredient.type,
        item: ingredient,
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const classOnDrag = {
        opacity: 0.5,
    }

    return (
        <div className={styles.block}>

            <div onClick={() => setModalVisible(true)} ref={refDrag} className={isDragging ? classOnDrag : ""}>
                <Counter count={3} size="default"  extraClass={`${styles.counter} m-5`}/>
                <img alt={ingredient.name} src={ingredient.image}/>
                <div className={`${styles.price} text text_type_digits-default pt-1 pb-1`}>{ingredient.price}
                    <CurrencyIcon type="primary" className="p-2"/>
                </div>
                <div className="text text_type_main-default">{ingredient.name}</div>
            </div>
            {modalVisible && modalIngredient}
        </div>
    )
}

Ingredient.propTypes = {
    ingredient: PropTypes.shape({
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
    })
}

export default Ingredient;