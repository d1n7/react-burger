import React from "react";
import styles from "./ingredient-type-list.module.css";
import Ingredient from "../ingredient/ingredient";
import PropTypes from "prop-types";
import {IngredientType} from "../../utils/types";

const IngredientTypeList = ({items, type, name, ref, counterData}) => {
    return (<>
        <div className="text_type_main-medium text pt-10 pb-6" id={type} ref={ref}>{name}</div>
        <div className={`${styles.bulki} pl-4 pr-4`}>
            {items.filter(i => i.type === type)
                .map((item) => {
                    return (<Ingredient key={item._id} ingredient={item} count={counterData.get(item._id)}/>)
                })}
        </div>
    </>)
}

IngredientTypeList.propTypes = {
    items: PropTypes.arrayOf(IngredientType),
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ref: PropTypes.object
}

export default IngredientTypeList;