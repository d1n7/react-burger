import React, {useEffect} from "react";
import {createPortal} from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css'
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('react-modals');

const Modal = ({children, header, onClose}) => {
    useEffect(() => {
        const handleKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey)
        }
    }, [])

    return createPortal(<ModalOverlay onClose={onClose}>
            <div className={styles.main} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={styles.top}>
                    <div className={`${styles.header} text text_type_main-default`}>{header}</div>
                    <div className={styles.image}><CloseIcon className={styles.x} onClick={onClose} type="primary"/></div>
                </div>
                {children}
            </div>
        </ModalOverlay>, modalRoot
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    onClose: PropTypes.func,
}

export default Modal;