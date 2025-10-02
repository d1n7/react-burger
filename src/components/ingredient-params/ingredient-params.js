import React from "react";
import styles from "./ingredient-params.module.css";
import PropTypes from "prop-types";

const IngredientParams = ({name, value}) => {
    return (
        <div className={styles.main}>
            <div className={styles.name}>{name}</div>
            <div className={styles.value}>{value}</div>
        </div>
    )
}

IngredientParams.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
}

export default IngredientParams;