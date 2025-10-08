import React from "react";
import styles from "./order-details.module.css";
import done from '../../images/done.png'

const OrderDetails = () => {
    return (<div className={styles.info}>
        <div className="text text_type_digits-large">034536</div>
        <div className="text text_type_main-medium">идентификатор заказа</div>
        <img alt={"иконка заказ создан"} src={done} className={`${styles.image} pt-15 pb-15`}/>
        <div className="text text_type_main-default">Ваш заказ начали готовить</div>
        <div className="text text_type_main-default pb-30 pt-2 text_color_inactive">Дождитесь готовности на орбитальной
            станции
        </div>
    </div>)
}

export default OrderDetails;