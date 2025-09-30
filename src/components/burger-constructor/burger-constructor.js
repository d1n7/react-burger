import React from "react";
import styles from "./burger-constructor.module.css";
import lock from "../../images/lock.svg";
import diamond from "../../images/diamond.svg";
import PropTypes from "prop-types";
import points from "../../images/points.svg";
import mull from "../../images/mull.svg";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = (props) => {

    const buns = props.data.filter(item => item.type === 'bun');
    const mains = props.data.filter(item => item.type === 'main');
    const sauces = props.data.filter(item => item.type === 'sauce');


    const bunTop = buns[Math.floor(Math.random() * buns.length)];
    const bunBottom = buns[Math.floor(Math.random() * buns.length)];

    let main = []
    let sauce = []


    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        main = [...main, sauces[Math.floor(Math.random() * sauces.length)]];
        sauce = [...sauce, mains[Math.floor(Math.random() * mains.length)]];
    }


    let ingredients = [...sauce, ...main]


    console.log(bunTop)
    return (<section className={styles.sec}>

        {bunTop && <div className={styles.trow}>
            <div className={styles.points}></div>
            <div className={styles.itop}>
                <img className={styles.iimage} alt="top" src={bunTop.image}/>
                <span className={styles.name}>{bunTop.name} (верх)</span>
                <div className={styles.price}>{bunTop.price} <img alt={"diamond"} src={diamond}/></div>
                <img className={styles.lock} alt={"lock"} src={lock}/>
            </div>
        </div>}
        <div className={ingredients && ingredients.length >= 6 && styles.scrolldiv}>
            <div className={styles.lenta}>
                {ingredients.map((item) => (
                    <div className={styles.row}>
                        <div className={styles.points}><img alt={"points"} src={points}/></div>
                        <div className={styles.ingredient}>
                            <img className={styles.iimage} alt="top" src={item.image}/>
                            <span className={styles.name}>{item.name}</span>
                            <div className={styles.price}>{item.price} <img alt={"diamond"} src={diamond}/></div>
                            <img className={styles.lock} alt={"lock"} src={mull}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {bunBottom && <div className={styles.brow}>
            <div className={styles.points}></div>
            <div className={styles.ibottom}>
                <img className={styles.iimage} alt="top" src={bunBottom.image}/>
                <span className={styles.name}>{bunBottom.name} (низ)</span>
                <div className={styles.price}>{bunBottom.price}<img alt={"diamond"} src={diamond}/></div>
                <img className={styles.lock} alt={"lock"} src={lock}/>
            </div>
        </div>
        }

        <div className={styles.summary}>
            <div className={styles.one}>100 <img alt={"diamond"} src={diamond}/></div>
            <Button htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
        </div>
    </section>)
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor;