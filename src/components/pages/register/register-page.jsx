import React from "react";
import AppHeader from "../../app-header/app-header";
import {Button, EmailInput, Input, PasswordInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register-page.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../../services/actions/register";
import {setRegisterForm} from "../../../services/reducers/register";

export const RegisterPage = () => {
    const {name, email, password} = useSelector((state) => state.registerForm.form);

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit", name, email, password);
        dispatch(registerUser())
    }

    const onChange = (e) => {
        console.log("onChange", e.target.name, e.target.value);
        dispatch(setRegisterForm(e.target.name, e.target.value));
    }

    return (
        <>
            <AppHeader/>
            <div className={`${styles.box} pt-30`}>
                <div className="text text_type_main-medium">Регистрация</div>
                <form className={`${styles.form}`} onSubmit={onSubmit}>
                    <Input extraClass={"pt-6"} placeholder={"Имя"} name="name" onChange={onChange}/>
                    <EmailInput
                        onChange={onChange}
                        value={email}
                        name="email"
                        placeholder="E-mail"
                        isIcon={false}
                        extraClass="pt-6"
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={password}
                        name="password"
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
