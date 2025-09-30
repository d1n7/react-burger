import React from 'react';
import styles from "./app-header.module.css";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import logo from "../../images/logo.svg";

let AppHeader = () => {
    return (<nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
            <div className={styles.construct}>
                <BurgerIcon className={styles.icon} type="primary"/><a href={"/"}>Конструктор</a>
            </div>
            <div className={styles.lenta}>
                <ListIcon className={styles.icon} type="secondary"/><a href={"/"}>Лента заказов</a>
            </div>
        </div>
        <div><img alt={"logo"} src={logo}/></div>
        <div className={styles.cabinet}>
            <ProfileIcon className={styles.icon} type="secondary"/><a href={"/"}>Личный кабинет</a>
        </div>
    </nav>)
}

export default AppHeader;