import React from "react";
import AppHeader from "../../app-header/app-header";
import styles from "./profile.module.css";
import {Link, Outlet, useLocation} from "react-router-dom";

export const Profile = () => {
    const location = useLocation();

    console.log("location", location)
    return (
        <>
            <AppHeader/>
            <div className={styles.box}>
                <ul className={`${styles.list}`}>
                    <li className={`${styles.item}`}>
                        <Link
                            className={location.pathname === "/profile" ? `text_type_main-medium selected `: `text_type_main-medium selected`}
                            to={"/profile"}
                        >
                            Профиль
                        </Link>
                    </li>
                    <li className={`${styles.item}`}>
                        <Link
                            className={"text_type_main-medium text_color_inactive"}
                            to={"/profile/orders"}
                        >
                            История заказов
                        </Link>
                    </li>
                    <li className={`${styles.item}`}>
                        <Link
                            className={"text text_type_main-medium text_color_inactive"}
                            to={"/logout"}
                        >
                            Выход
                        </Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </>
    );
};
