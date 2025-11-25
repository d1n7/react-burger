import React, {useEffect} from "react";
import styles from "./profile-user.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {setProfileForm} from "../../../services/reducers/profile";
import {saveProfile, userProfile} from "../../../services/actions/profile";

export const ProfileUser = () => {
    const dispatch = useDispatch();
    const {name, email, password} = useSelector(state => state.profileForm.form);

    useEffect(() => {
        dispatch(userProfile());

        // eslint-disable-next-line
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(saveProfile())
    }

    const onChange = (e) => {
        dispatch(setProfileForm(e.target.name, e.target.value));
    }

    return (
        <form className={styles.box} onSubmit={onSubmit}>
            <div className={styles.main}>
                <Input placeholder={"Имя"} name="name" value={name} onChange={onChange}/>
                <Input extraClass={"pt-6 pb-6"} placeholder={"Логин"} name="email" value={email}
                       onChange={onChange}/>
                <PasswordInput placeholder={"Пароль"} name="password" value={password} onChange={onChange}/>
                <Button htmlType={"submit"} extraClass={"mt-10"}>Сохранить</Button>
            </div>
        </form>
    );
};
