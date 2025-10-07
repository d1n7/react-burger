import React from 'react';
import styles from "./app-header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
    return (<nav className={styles.navbar}>
        <div className={styles.menu}>
            <div className={styles.navbarLeft}>
                <div className={styles.construct}>
                    <BurgerIcon className="pl-5 pr-2" type="primary"/><p className="text text_type_main-default">Конструктор</p>
                </div>
                <div className={styles.lenta}>
                    <ListIcon className="pl-5 pr-2" type="secondary"/><p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                </div>
            </div>
            <div className={styles.logo}><Logo/></div>
            <div className={styles.cabinet}>
                <ProfileIcon className="pl-5 pr-2" type="secondary"/><p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
            </div>
        </div>

    </nav>)
}

export default AppHeader;