import React from "react";
import styles from "./ingredient-type-list.module.css";
import Ingredient from "../ingredient/ingredient";
import PropTypes from "prop-types";

const IngredientTypeList = ({items, type, name}) => {
    return <>
        <div className={styles.razdel}>{name}</div>
        <div className={styles.bulki}>
            {items.filter(i => i.type === type)
                .map((item) => {
                    return <Ingredient key={item._id} ingredient={item}/>;
                })}
        </div>
    </>
}

IngredientTypeList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
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
        })),
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default IngredientTypeList;