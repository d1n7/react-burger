import React from "react";
import styles from "./error-inform.module.css";


class ErrorInform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errDesc: ""
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, errDesc: error.message};
    }

    componentDidCatch(error, info) {
        console.log("Возникла ошибка!", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (<div className={styles.main}>
                <div className={styles.picture}>
                    <p className="text text_type_digits-medium">Произошла ошибка</p>
                    <p  className="text text_type_main-default text_color_inactive pt-5">
                        {this.state.errDesc}
                    </p>
                    <p  className="text text_type_main-default text_color_inactive pt-5">
                        Попробуйте перезагрузить страницу.
                    </p>
                </div>

            </div>)
        }

        return (this.props.children)
    }

}

export default ErrorInform;