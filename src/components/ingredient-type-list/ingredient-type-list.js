import React from "react";
import styles from "./ingredient-type-list.module.css";
import Ingredient from "../ingredient/ingredient";

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

export default IngredientTypeList;