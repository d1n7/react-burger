import React from "react";
import styles from "./ingredient-params.module.css";
import PropTypes from "prop-types";

const IngredientParams = ({name, value}) => {
    return (
        <div className={styles.main}>
            <div className="text text_type_main-default text_color_inactive">{name}</div>
            <div className={`${styles.value} text text_type_main-default text_color_inactive`}>{value}</div>
        </div>
    )
}

IngredientParams.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
}

export default IngredientParams;