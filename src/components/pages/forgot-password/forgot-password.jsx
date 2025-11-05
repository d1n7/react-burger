import React, {useEffect} from "react";
import AppHeader from "../../app-header/app-header";
import {Button, EmailInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import styles from "../login/login-page.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setForgotFormValue} from "../../../services/reducers/forgot";
import {recoveryEmail} from "../../../services/actions/forgot";

export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email} = useSelector(state => state.forgotForm.form);
    const recoveryRequest = useSelector(state => state.forgotForm.recoveryRequest);
    const recoverySuccess = useSelector(state => state.forgotForm.recoverySuccess);

    const onChange = (e) => {
        dispatch(setForgotFormValue(e.target.name, e.target.value))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(recoveryEmail(email));
    }

    useEffect(() => {
        console.log(recoverySuccess);
        if (recoverySuccess) {
            navigate("/reset-password")
        }
    }, [recoveryRequest])


    return (
        <>
            <AppHeader/>
            <div className={`${styles.box} pt-30`}>
                <div className="text text_type_main-medium">Восстановление пароля</div>
                <form className={styles.form} onSubmit={onSubmit}>
                    <EmailInput
                        type={"email"}
                        placeholder={"E-mail"}
                        onChange={onChange}
                        name={"email"}
                        error={false}
                        value={email}
                        errorText={"Ошибка"}
                        size={"default"}
                        extraClass="ml-1 mt-6"
                    />
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        disabled={!!recoveryRequest}
                        extraClass={"mt-6"}
                    >
                        Восстановить
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
