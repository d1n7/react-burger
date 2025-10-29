import React from "react";
import AppHeader from "../../app-header/app-header";
import {
	Button,
	EmailInput,
	PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
	const [value, setValue] = React.useState("");
	const inputRef = React.useRef(null);
	const onIconClick = () => {
		setTimeout(() => inputRef.current.focus(), 0);
		alert("Icon Click Callback");
	};

	const [password, setPassword] = React.useState("");

	return (
		<>
			<AppHeader />
			<div className={`${styles.box} mt-30`}>
				<div className="text text_type_main-medium">Вход</div>
				<EmailInput
					type={"email"}
					placeholder={"E-mail"}
					onChange={(e) => setValue(e.target.value)}
					name={"email"}
					error={false}
					value={value}
					onIconClick={onIconClick}
					errorText={"Ошибка"}
					size={"default"}
					extraClass="ml-1 mt-6"
				/>
				<PasswordInput
					type={"text"}
					placeholder={"Пароль"}
					onChange={(e) => setPassword(e.target.value)}
					name={"password"}
					value={password}
					error={false}
					ref={inputRef}
					errorText={"Ошибка"}
					size={"default"}
					extraClass="ml-1 mt-6"
				/>
				<Button
					htmlType="button"
					type="primary"
					size="medium"
					extraClass={"mb-10 mt-6"}
					onClick={onIconClick}
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
			</div>
		</>
	);
};
