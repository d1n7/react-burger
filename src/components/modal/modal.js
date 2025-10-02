import React from "react";
import {createPortal} from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import PropTypes from "prop-types";

const modalRoot = document.getElementById('react-modals');

const Modal = ({children, header, onClose}) => {
    return createPortal(<div className={styles.main}>
            <div className={styles.top}>
                <div className={styles.header}>{header}</div>
                <div className={styles.image}><CloseIcon className={styles.x} onClick={onClose} type="primary"/></div>
            </div>
            {children}
        </div>, modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    onClose: PropTypes.func,
}

export default Modal;