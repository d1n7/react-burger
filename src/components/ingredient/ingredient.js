import React from "react";
import styles from "./ingredient.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import PropTypes from "prop-types";

const Ingredient = ({ingredient}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    console.log(modalVisible);

    const modalIngredient = <Modal header={"Детали ингредиента"} onClose={() => setModalVisible(false)}>
        <IngredientDetails ingredient={ingredient}/>
    </Modal>;

    return (<div style={{overflow: 'hidden'}}>
            <div onClick={() => setModalVisible(true)}>
                <img alt={ingredient.name} src={ingredient.image}/>
                <div className={styles.price}>{ingredient.price} <CurrencyIcon type="primary" className="p-2"/>
                </div>
                <div className={styles['product-name']}>{ingredient.name}</div>
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