import React from "react";
import AppHeader from "../../app-header/app-header";
import styles from "../login/login-page.module.css";
import {
	Button,
	Input,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
	const [email, setEmail] = React.useState("");
	const [code, setCode] = React.useState("");

	return (
		<>
			<AppHeader />
			<div className={`${styles.box} pt-30`}>
				<div className="text text_type_main-medium">Изменение пароля</div>
				<PasswordInput
					type={"password"}
					placeholder={"Введите новый пароль"}
					onChange={(e) => setEmail(e.target.value)}
					name={"password"}
					error={false}
					value={email}
					errorText={"Ошибка"}
					size={"default"}
					extraClass="ml-1 mt-6"
				/>
				<Input
					type={"text"}
					placeholder={"Введите код из письма"}
					onChange={(e) => setCode(e.target.value)}
					name={"password2"}
					error={false}
					value={code}
					errorText={"Ошибка"}
					size={"default"}
					extraClass="ml-1 mt-6"
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					extraClass={"mb-10 mt-6"}
				>
					Сохранить
				</Button>
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
