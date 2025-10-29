import React from "react";
import AppHeader from "../../app-header/app-header";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export const Profile = () => {
	return (
		<>
			<AppHeader />
			<div className={styles.box}>
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
					<Input placeholder={"Имя"} />
					<Input extraClass={"pt-6 pb-6"} placeholder={"Логин"} />
					<Input placeholder={"Пароль"} />
				</div>
			</div>
		</>
	);
};
