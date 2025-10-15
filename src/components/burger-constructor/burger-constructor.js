import React, {useCallback, useEffect, useMemo} from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";

import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import HiddenPoint from "../../images/hidden-point.svg"
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_BUN, ADD_FILLING, CALCULATE_PRICE, CLEAR_BURGER, MOVE_BURGER_ELEMENTS} from "../../services/actions/burger";
import {CLOSE_ORDER_INFO, sendOrder} from "../../services/actions/order";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const bun = useSelector(state =>
        state.ingredients.ingredients.find(ingredient => ingredient._id === state.burger.bun))

    const burgerFill = useSelector(state => state.burger.fillings)

    const allIngredients = useSelector(state => state.ingredients.ingredients)

    const {fillings, selectedBun} = useSelector(state => ({
        selectedBun: state.burger.bun,
        fillings: state.burger.fillings,
    }))

    const price = useSelector(state => state.burger.price)

    const burgerIngredients = useMemo(() => {
        return burgerFill.map(itemId =>
            allIngredients.find((item) => item._id === itemId))
    }, [allIngredients, burgerFill, fillings])

    const handleCloseModal = () => {
        dispatch({type: CLOSE_ORDER_INFO})
    }

    const modalOrder = <Modal header="" onClose={handleCloseModal}>
        <OrderDetails/>
    </Modal>

    const modalVisible = useSelector(state => state.order.visible)

    const [{isOverTop}, refDropTop] = useDrop(() => ({
        accept: "bun",
        items: bun,
        drop: (item) => {
            dispatch({
                type: ADD_BUN,
                bun: item._id,
            })
        },
        collect: monitor => ({
            isOverTop: monitor.isOver(),
        })
    }))

    const [{isOverBottom}, refDropBottom] = useDrop(() => ({
        accept: "bun",
        drop: (item) => {
            dispatch({
                type: ADD_BUN,
                bun: item._id,
            })
        },
        collect: monitor => ({
            isOverBottom: monitor.isOver(),
        })
    }))

    const [{isOver}, refDrop] = useDrop(() => ({
        accept: ["main", "sauce"],
        drop: (item) => {
            dispatch({
                type: ADD_FILLING,
                id: item._id,
            })
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        })
    }))

    useEffect(() => {
        const bun = allIngredients.find((item => selectedBun === item._id))

        const fillingsPrice = fillings.map(itemId => allIngredients.find((item) => item._id === itemId))
            .reduce((acc, item) => acc + item.price, 0)

        let result = 0

        if (bun) {
            result += bun.price * 2;
        }

        if (fillings) {
            result += fillingsPrice
        }

        dispatch({type: CALCULATE_PRICE, price: result})
    }, [selectedBun, burgerIngredients, allIngredients, dispatch, fillings])


    const handleOrder = () => {
        dispatch(sendOrder({
            ingredients: burgerFill
        }))
    }

    const {isSuccess, orderNumber} = useSelector(state => ({
        isSuccess: state.order.orderRequestSuccess,
        orderNumber: state.order.order
    }))

    useEffect(() => {
        if (isSuccess && orderNumber > 0) {
            dispatch({type: CLEAR_BURGER})
        }
    }, [isSuccess, orderNumber, dispatch])

    const moveElement = useCallback((dragIndex, hoverIndex) => {
        dispatch({type: MOVE_BURGER_ELEMENTS, payload: {dragIndex, hoverIndex}})
    }, [fillings])

    return <section className={styles.sec}>
        <div className={`${styles.row} pb-4`} ref={refDropTop}>
            <div className={`${styles.points} pr-2`}/>
            <ConstructorElement
                type={'top'}
                isLocked={true}
                text={bun ? bun.name : "Выберите булку"}
                price={bun ? bun.price : null}
                extraClass={isOverTop || isOverBottom ? styles.over : null}
                thumbnail={bun ? bun.image : HiddenPoint}
            />
        </div>

        <div className={styles.lenta} key={"SecRetID"} ref={refDrop}>
            {burgerIngredients.length ? burgerIngredients.map((item, index) => (
                <BurgerConstructorElement
                    key={item._id}
                    element={item}
                    isOver={isOver}
                    index={index}
                    moveElement={moveElement}/>
            )) : <div className={styles.row}>
                <div className={`${styles.points} pl-2`}/>
                <ConstructorElement
                    text={"Добавьте ингредиент"}
                    price={null}
                    extraClass={isOver ? styles.over : null}
                    thumbnail={HiddenPoint}
                />
            </div>}
        </div>
        <div className={`${styles.row} pt-4`} ref={refDropBottom}>
            <div className={`${styles.points} pr-2`}/>
            <ConstructorElement
                type={'bottom'}
                isLocked={true}
                text={bun ? bun.name : "Выберите булку"}
                price={bun ? bun.price : null}
                extraClass={isOverTop || isOverBottom ? styles.over : null}
                thumbnail={bun ? bun.image : HiddenPoint}
            />
        </div>
        <div className={`${styles.summary} pt-10`}>
            <div className={`${styles.one} text text_type_digits-medium pt-3 pl-5 pb-3`}>{price}<CurrencyIcon
                type="primary" className="p-2"/></div>
            <div>
                <Button htmlType="button" type="primary" size="large" onClick={handleOrder}>
                    Оформить заказ
                </Button>
                {modalVisible && modalOrder}
            </div>
        </div>
    </section>
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