import React from 'react';
import styles from "./app-header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (<nav className={styles.navbar}>
        <div className={styles.menu}>
            <div className={styles.navbarLeft}>
                <div className={styles.construct}>
                    <BurgerIcon className={styles.icon} type="primary"/><a href={"/"}>Конструктор</a>
                </div>
                <div className={styles.lenta}>
                    <ListIcon className={styles.icon} type="secondary"/><a href={"/"}>Лента заказов</a>
                </div>
            </div>
            <div><Logo/></div>
            <div className={styles.cabinet}>
                <ProfileIcon className={styles.icon} type="secondary"/><a href={"/"}>Личный кабинет</a>
            </div>
        </div>

    </nav>)
}

export default AppHeader;