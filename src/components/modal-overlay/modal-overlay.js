import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({children, onClose}) => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    });

    return <div className={styles.overlay}>{children}</div>
}

export default ModalOverlay;