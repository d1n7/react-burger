import React, {useEffect} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import Loading from "../../images/loading.svg";

function App() {
    const dispatch = useDispatch();
    const {ingredientsRequest, ingredientsRequestFailed} = useSelector(state => state.ingredients);

    useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch]);

    useEffect(() => {
        if (ingredientsRequestFailed) {
            throw new Error(ingredientsRequestFailed);
        }
    }, [ingredientsRequestFailed]);

    return (
        <>
            <AppHeader/>
            <div className={styles.panel}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </div>
        </>

    );
}

export default App;
