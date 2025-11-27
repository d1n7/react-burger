import React, {useCallback, useEffect} from "react";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_ORDER_INFO} from "../../services/actions/order";
import {CLOSE_INGREDIENT_INFORMATION, SHOW_INGREDIENT_INFORMATION} from "../../services/actions/info";
import {replace, useNavigate, useParams} from "react-router-dom";

const modalRoot = document.getElementById("react-modals");

const Modal = ({children, header}) => {
    const dispatch = useDispatch();
    let infoModalVisible = useSelector(state => state.infoModal.visible);
    let ingredients = useSelector(state => state.ingredients.ingredients);
    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        if (params && params.id) {
            ingredients.forEach(ingredient => {
                if (ingredient._id === params.id) {
                    dispatch({type: SHOW_INGREDIENT_INFORMATION, ingredient: ingredient});
                }
            })
        }
    }, [params,ingredients])


    const onClose = useCallback(() => {
        console.log(infoModalVisible);
        dispatch({type: CLOSE_ORDER_INFO});
        dispatch({type: CLOSE_INGREDIENT_INFORMATION});
        navigate("/", replace);
    }, [infoModalVisible]);


    useEffect(() => {
        const handleKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [onClose]);

    return infoModalVisible && createPortal(
        <ModalOverlay onClose={onClose}>
            <div
                className={styles.main}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={styles.top}>
                    <div className={`${styles.header} text text_type_main-default`}>
                        {header}
                    </div>
                    <div className={styles.image}>
                        <CloseIcon className={styles.x} onClick={onClose} type="primary"/>
                    </div>
                </div>
                {children}
            </div>
        </ModalOverlay>,
        modalRoot,
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    onClose: PropTypes.func,
};

export default Modal;
