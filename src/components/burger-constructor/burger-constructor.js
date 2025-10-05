import React from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import points from "../../images/points.svg";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const buns = props.data.filter(item => item.type === 'bun');
    const mains = props.data.filter(item => item.type === 'main');
    const sauces = props.data.filter(item => item.type === 'sauce');

    const bun = buns[Math.floor(Math.random() * buns.length)];

    let main = []
    let sauce = []

    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        main = [...main, sauces[Math.floor(Math.random() * sauces.length)]];
        sauce = [...sauce, mains[Math.floor(Math.random() * mains.length)]];
    }

    const ingredients = [bun, ...sauce, ...main, bun]
    const sum = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)

    const openOrderModal = () => {
        console.log("openOrderModal");
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        console.log("close modal");
        setModalVisible(false)
    }


    const modalOrder = <Modal header="" onClose={handleCloseModal}>
        <OrderDetails/>
    </Modal>

    return (<section className={styles.sec}>
        {ingredients && <div key={ingredients[0]._id + "t"} className={`${styles.row} pb-4`}>
            <div className={`${styles.points} pr-2`}/>
            <ConstructorElement
                type={'top'}
                isLocked={true}
                text={ingredients[0].name}
                price={ingredients[0].price}
                thumbnail={ingredients[0].image}/>
        </div>}
        <div className={styles.lenta}>
            {ingredients.filter((_, index) => index !== 0 && index !== ingredients.length - 1).map(item => (
                <div key={item._id} className={styles.row}>
                    <div className={`${styles.points} pl-2`}>
                        <img alt={"points"} src={points}/>
                    </div>
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </div>
            ))}

        </div>

        {ingredients && <div key={ingredients[ingredients.length - 1]._id + "b"} className={`${styles.row} pt-4`}>
            <div className={`${styles.points} pl-2`}/>
            <ConstructorElement
                type={'bottom'}
                isLocked={true}
                text={ingredients[ingredients.length - 1].name}
                price={ingredients[ingredients.length - 1].price}
                thumbnail={ingredients[ingredients.length - 1].image}/>
        </div>}
        <div className={`${styles.summary} pt-10`}>
            <div className={`${styles.one} text text_type_digits-medium pt-3 pl-5 pb-3`}>{sum}<CurrencyIcon type="primary" className="p-2"/></div>
            <div style={{overflow: 'hidden'}}>
                <Button htmlType="button" type="primary" size="large" onClick={openOrderModal}>
                    Оформить заказ
                </Button>
                {modalVisible && modalOrder}
            </div>

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