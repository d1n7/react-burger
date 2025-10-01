import React from "react";
import styles from "./burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import IngredientTypeList from "../ingredient-type-list/ingredient-type-list";

const BurgerIngredients = (props) => {
    const [current, setCurrent] = React.useState('bun')

    return (<section className={styles.sec}>
        <div className={styles.title}>Соберите бургер</div>
        <div className={styles.tabs}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
        <div className={styles.scrolldiv}>
            <IngredientTypeList items={props.data} type={"bun"} name={"Булки"}/>
            <IngredientTypeList items={props.data} type={"sauce"} name={"Соусы"}/>
            <IngredientTypeList items={props.data} type={"main"} name={"Начинки"}/>
        </div>

    </section>)
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(
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
        })
    ).isRequired,
}

export default BurgerIngredients;