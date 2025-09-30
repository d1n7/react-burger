import React from "react";
import styles from "./burger-ingredients.module.css";
import {CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';


let BurgerIngredients = (props) => {
    const [current, setCurrent] = React.useState('bun')

    return (<section className={styles.sec}>
        <div className={styles.title}>Соберите бургер</div>

            <div style={{display: 'flex'}}>
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
            <div className={styles.razdel}>Булки</div>
            <div className={styles.bulki}>
                {props.data && props.data
                    .filter(i => i.type === "bun")
                    .map((item) => {
                        return <div key={item._id} className={styles.column}>
                            <img alt={item.name} src={item.image}/>
                            <div className={styles.price}>{item.price} <CurrencyIcon type="primary" className="p-2"/>
                            </div>
                            <div className={styles['product-name']}>{item.name}</div>
                        </div>
                    })}
            </div>
            <div className={styles.razdel}>Соусы</div>
            <div className={styles.bulki}>
                {props.data && props.data
                    .filter(i => i.type === "sauce")
                    .map((item, index) => <div key={item._id} className={styles.column}>
                            <img alt={item.name} src={item.image}/>
                            <div className={styles.price}>{item.price} <CurrencyIcon type="primary" className="p-2"/></div>
                            <div className={styles['product-name']}>{item.name}</div>
                        </div>
                    )}
            </div>
            <div className={styles.razdel}>Начинки</div>
            <div className={styles.bulki}>
                {props.data && props.data
                    .filter(i => i.type === "main")
                    .map((item) => <div key={item._id} className={styles.column}>
                            <img alt={item.name} src={item.image}/>
                            <div className={styles.price}>{item.price} <CurrencyIcon type="primary" className="p-2"/></div>
                            <div className={styles['product-name']}>{item.name}</div>
                        </div>
                    )}
            </div>
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