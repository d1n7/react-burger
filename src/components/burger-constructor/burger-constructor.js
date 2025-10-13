import React from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import points from "../../images/points.svg";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import HiddenPoint from "../../images/hidden-point.svg"
import {useSelector} from "react-redux";

const BurgerConstructor = () => {
    const bun = useSelector(state => state.burger.bun);

    // const [modalVisible, setModalVisible] = React.useState(false);

    // const openOrderModal = () => {
    //     setModalVisible(true)
    // }
    //
    // const handleCloseModal = () => {
    //     setModalVisible(false)
    // }


    // const modalOrder = <Modal header="" onClose={handleCloseModal}>
    //     <OrderDetails/>
    // </Modal>

    return <section className={styles.sec}>
        <div className={`${styles.row} pb-4`}>
            <div className={`${styles.points} pr-2`}/>
            {bun ? <ConstructorElement
                type={'top'}
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
            /> : <ConstructorElement
                type={'top'}
                isLocked={true}
                text={"Выберите булку"}
                price={null}
                thumbnail={HiddenPoint}
            />}
        </div>
        <div className={styles.lenta} key={"SecRetID"}>
            <div className={styles.row}>
                <div className={`${styles.points} pl-2`}/>
                <ConstructorElement
                    text={"Добавьте ингредиент"}
                    price={null}
                    thumbnail={HiddenPoint}
                />
            </div>
        </div>
        <div className={`${styles.row} pt-4`}>
            <div className={`${styles.points} pr-2`}/>
            {bun ? <ConstructorElement
                type={'bottom'}
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
            /> : <ConstructorElement
                type={'bottom'}
                isLocked={true}
                text={"Выберите булку"}
                price={null}
                thumbnail={HiddenPoint}
            />}
        </div>
        <div className={`${styles.summary} pt-10`}>
            <div className={`${styles.one} text text_type_digits-medium pt-3 pl-5 pb-3`}>{0}<CurrencyIcon
                type="primary" className="p-2"/></div>
            <div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    </section>

    // return (<section className={styles.sec}>
    //     {ingredients && <div key={ingredients[0]._id + "t"} className={`${styles.row} pb-4`}>
    //         <div className={`${styles.points} pr-2`}/>
    //         <ConstructorElement
    //             type={'top'}
    //             isLocked={true}
    //             text={ingredients[0].name}
    //             price={ingredients[0].price}
    //             thumbnail={ingredients[0].image}/>
    //     </div>}
    //     <div className={styles.lenta} key={"SecRetID"}>
    //         {ingredients.filter((_, index) => index !== 0 && index !== ingredients.length - 1).map((item, index) => (
    //             <div key={index} className={styles.row}>
    //                 <div className={`${styles.points} pl-2`}>
    //                     <img alt={"points"} src={points}/>
    //                 </div>
    //                 <ConstructorElement
    //                     text={item.name}
    //                     price={item.price}
    //                     thumbnail={item.image}
    //                 />
    //             </div>
    //         ))}
    //
    //     </div>
    //
    //     {ingredients && <div key={ingredients[ingredients.length - 1]._id + "b"} className={`${styles.row} pt-4`}>
    //         <div className={`${styles.points} pl-2`}/>
    //         <ConstructorElement
    //             type={'bottom'}
    //             isLocked={true}
    //             text={ingredients[ingredients.length - 1].name}
    //             price={ingredients[ingredients.length - 1].price}
    //             thumbnail={ingredients[ingredients.length - 1].image}/>
    //     </div>}
    //     <div className={`${styles.summary} pt-10`}>
    //         <div className={`${styles.one} text text_type_digits-medium pt-3 pl-5 pb-3`}>{sum}<CurrencyIcon
    //             type="primary" className="p-2"/></div>
    //         <div style={{overflow: 'hidden'}}>
    //             <Button htmlType="button" type="primary" size="large" onClick={openOrderModal}>
    //                 Оформить заказ
    //             </Button>
    //             {modalVisible && modalOrder}
    //         </div>
    //
    //     </div>
    // </section>)
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