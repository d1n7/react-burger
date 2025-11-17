import React from "react";
import AppHeader from "../../app-header/app-header";
import styles from "./profile.module.css";
import {Link} from "react-router-dom";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {authLoginAddress, authTokenAddress} from "../../../services/api";

export const Profile = () => {


    const accessToken = "f26a080ec737196ce884df704c45f555348dabbd21f48128a2f3838ce45e5c1cd40a3090bff2d8ce"

    const onClick = (e) => {
        e.preventDefault();
        localStorage.setItem("accessToken", accessToken);

        const name = "token"

        // encodeURIComponent()

        document.cookie = "user=Alex; path=/; max-age=15"

        document.cookie = "token2=0001"

        console.log("document.cookie", document.cookie);

        const req = new Request(authTokenAddress, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({token: localStorage.getItem("accessToken")}),
        })

        const reqLogin = new Request(authLoginAddress, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "alterono@yandex.ru",
                password: "ddd111"
            })
        })

        fetch(reqLogin)
            .then(res => res.json())
            .then((data) => {
                console.log("resp", data, data.success && data.success === true);

                if (data.success && data.success === true && data.hasOwnProperty("refreshToken")) {
                    localStorage.setItem("refreshToken", data.refreshToken);
                }

            }).catch(err => console.log(err));


    }
    return (
        <>
            <AppHeader/>
            <form className={styles.box}>
                <ul className={`${styles.list}`}>
                    <li className={`${styles.item}`}>
                        <Link
                            className={"text text_type_main-medium text_color_inactive"}
                            to={"/profile"}
                        >
                            Профиль
                        </Link>
                    </li>
                    <li className={`${styles.item}`}>
                        <Link
                            className={"text text_type_main-medium text_color_inactive"}
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

                <div className={styles.main}>
                    <Input placeholder={"Имя"}/>
                    <Input extraClass={"pt-6 pb-6"} placeholder={"Логин"}/>
                    <Input placeholder={"Пароль"}/>
                    <Button extraClass={"mt-10"} onClick={onClick}>ddd</Button>
                </div>
            </form>
        </>
    );
};
