import React from "react";
import styles from "./ingredient.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredient = ({ingredient}) => {
    return (<div>
        <img alt={ingredient.name} src={ingredient.image}/>
        <div className={styles.price}>{ingredient.price} <CurrencyIcon type="primary" className="p-2"/>
        </div>
        <div className={styles['product-name']}>{ingredient.name}</div>
    </div>)
}

export default Ingredient;