import React from "react";
import AppHeader from "../../app-header/app-header";
import styles from "./profile.module.css";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../utils/auth";

export const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const {logout} = useAuth()

    const onLogout = () => {
        logout()
        navigate('/login', {replace: true});
    }

    return (
        <>
            <AppHeader/>
            <div className={styles.box}>
                <ul className={`${styles.list}`}>
                    <li className={`${styles.item}`}>
                        <Link
                            className={location.pathname === "/profile" ? `text_type_main-medium selected ` : `text_type_main-medium selected`}
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
                            onClick={onLogout}
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
