import React from "react";

import styles from "./404.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as ErrorImg } from "../../../images/error.svg";

export const Page404 = () => {
	return (
		<div className={styles.box}>
			<Link className={styles.link} to="/">
				<ErrorImg />
				Домой
			</Link>
			<div className={styles.backgroundWrapper}>
				<h1 id="visual">404</h1>
			</div>
			<p className={styles.errorText}>Страница не существует.</p>
		</div>
	);
};
