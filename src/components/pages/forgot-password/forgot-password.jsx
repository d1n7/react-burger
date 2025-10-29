import React from "react";
import AppHeader from "../../app-header/app-header";
import {
	Button,
	EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from "../login/login-page.module.css";

export const ForgotPassword = () => {
	const [email, setEmail] = React.useState("");

	return (
		<>
			<AppHeader />
			<div className={`${styles.box} pt-30`}>
				<div className="text text_type_main-medium">Восстановление пароля</div>
				<EmailInput
					type={"email"}
					placeholder={"E-mail"}
					onChange={(e) => setEmail(e.target.value)}
					name={"email"}
					error={false}
					value={email}
					errorText={"Ошибка"}
					size={"default"}
					extraClass="ml-1 mt-6"
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					extraClass={"mt-6"}
				>
					Восстановить
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
