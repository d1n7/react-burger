import React, {useEffect} from "react";
import AppHeader from "../../app-header/app-header";
import styles from "./reset-password.module.css";
import {Button, Input, PasswordInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPasswordResetValue} from "../../../services/reducers/reset";
import {resetPassword} from "../../../services/actions/reset";

export const ResetPassword = () => {
    const {password, token} = useSelector(state => state.resetForm.form);
    const dispatch = useDispatch();

    const passwordResetSuccess = useSelector(state => state.resetForm.passwordResetSuccess);
    const passwordResetRequest = useSelector(state => state.resetForm.passwordResetRequest);

    const onChange = (e) => {
        dispatch(setPasswordResetValue(e.target.name, e.target.value));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword());
    }

    useEffect(() => {
        if (passwordResetSuccess) {
            console.log("passwordResetSuccess", passwordResetSuccess);
        }
    }, [passwordResetRequest]);

    return (
        <>
            <AppHeader/>
            <div className={`${styles.box} pt-30`}>
                <div className="text text_type_main-medium">Изменение пароля</div>
                <form className={styles.form} onSubmit={onSubmit}>
                    <PasswordInput
                        type={"password"}
                        placeholder={"Введите новый пароль"}
                        onChange={onChange}
                        name="password"
                        error={false}
                        value={password}
                        errorText={"Ошибка"}
                        size={"default"}
                        extraClass="ml-1 mt-6"
                    />
                    <Input
                        type={"text"}
                        placeholder={"Введите код из письма"}
                        onChange={onChange}
                        error={false}
                        name="token"
                        value={token}
                        errorText={"Ошибка"}
                        size={"default"}
                        extraClass="ml-1 mt-6"
                    />
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        extraClass={"mb-10 mt-6"}
                        disabled={!!passwordResetRequest}
                    >
                        Сохранить
                    </Button>
                </form>
                <div
                    className={"text text_type_main-default text_color_inactive pt-20"}
                >
                    Вспомнили пароль?{" "}
                    <Link to={"/login"} className={styles.link}>
                        Войти
                    </Link>
                </div>
            </div>
        </>
    );
};
