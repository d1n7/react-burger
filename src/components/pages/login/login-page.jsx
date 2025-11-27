import React from "react";
import AppHeader from "../../app-header/app-header";
import {Button, EmailInput, PasswordInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import {Link, Navigate} from "react-router-dom";
import {useAuth} from "../../../utils/auth";

export const LoginPage = () => {
    const [form, setForm] = React.useState({email: "", password: ""});

    let auth = useAuth();

    let login = (e) => {
        e.preventDefault();
        auth.login(form);
    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    if (auth.user) {
        console.log("auth.user", auth.user);
        return <Navigate to="/" replace={true}/>
    }

    return (
        <>
            <AppHeader/>
            <form className={`${styles.box} mt-30`}>
                <div className="text text_type_main-medium">Вход</div>
                <EmailInput
                    type={"email"}
                    placeholder={"E-mail"}
                    onChange={onChange}
                    name="email"
                    error={false}
                    value={form.email}
                    errorText={"Ошибка"}
                    size={"default"}
                    extraClass="ml-1 mt-6"
                />
                <PasswordInput
                    type={"password"}
                    placeholder={"Пароль"}
                    onChange={onChange}
                    name="password"
                    value={form.password}
                    error={false}
                    errorText={"Ошибка"}
                    size={"default"}
                    extraClass="ml-1 mt-6"
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                    extraClass={"mb-10 mt-6"}
                    onClick={login}
                >
                    Вход
                </Button>
                <div className={"text text_type_main-default text_color_inactive"}>
                    Вы - новый пользователь?{" "}
                    <Link to={"/register"} className={styles.link}>
                        Зарегистрироваться?
                    </Link>
                </div>
                <div className={"text text_type_main-default text_color_inactive mt-4"}>
                    Забыли пароль?{" "}
                    <Link to={"/forgot-password"} className={styles.link}>
                        Восстановить пароль?
                    </Link>
                </div>
            </form>
        </>
    );
};
