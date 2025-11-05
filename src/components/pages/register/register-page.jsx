import React from "react";
import AppHeader from "../../app-header/app-header";
import {Button, EmailInput, Input, PasswordInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register-page.module.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const RegisterPage = () => {
    const {username, email, password} = useSelector((state) => state.register);

    return (
        <>
            <AppHeader/>
            <div className={`${styles.box} pt-30`}>
                <div className="text text_type_main-medium">Регистрация</div>
                <form className={`${styles.form}`}>
                    <Input extraClass={"pt-6"} placeholder={"Имя"} name={username} onChange={onChange}/>
                    <EmailInput
                        onChange={onChange}
                        value={""}
                        name={"email"}
                        placeholder="E-mail"
                        isIcon={false}
                        extraClass="pt-6"
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={""}
                        name={"Пароль"}
                        extraClass="pt-6"
                    />
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        extraClass={"mb-10 mt-6"}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <div className={"text text_type_main-default text_color_inactive mt-4"}>
                    Уже зарегистрированы?{" "}
                    <Link to={"/login"} className={styles.link}>
                        Войти
                    </Link>
                </div>
            </div>
        </>
    );
};
