import React from "react";
import styles from "./order-details.module.css";
import done from '../../images/done.png'

const OrderDetails = () => {
    return (<div className={styles.info}>
        <div className={styles.orderNumber}>034536</div>
        <div className={styles.identification}>идентификатор заказа</div>
        <img alt={"иконка заказ создан"} src={done} className={styles.image}/>
        <div className={styles.begin}>Ваш заказ начали готовить</div>
        <div className={styles.ready}>Дождитесь готовности на орбитальной станции</div>
    </div>)
}

export default OrderDetails;