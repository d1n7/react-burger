import React from "react";
import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import IngredientParams from "../ingredient-params/ingredient-params";

const IngredientDetails = ({ingredient}) => {
    return (<div className={styles.main}>
        <img className={styles.image} alt={"фото " + ingredient.name} src={ingredient.image}/>
        <div className="text_type_main-medium pb-8 pt-2">{ingredient.name}</div>
        <div className={`${styles.params} pb-15`}>
            <IngredientParams name={"Калории,ккал"} value={ingredient.calories}/>
            <IngredientParams name={"Белки, г"} value={ingredient.calories}/>
            <IngredientParams name={"Жиры, г"} value={ingredient.calories}/>
            <IngredientParams name={"Углеводы, г"} value={ingredient.calories}/>
        </div>
    </div>)
}

IngredientDetails.propTypes = {
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

export default IngredientDetails;

