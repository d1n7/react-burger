import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";

const apiURL = "https://norma.nomoreparties.space/"

function App() {
    const [err, setErr] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    const ingredientsData = useSelector((state) => {
        console.log("state", state)
        return state.ingredients.ingredients
    });


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const address = new URL(endpoint, apiURL).href
    //             const response = await fetch(address)
    //             if (!response.ok) {
    //                 setErr(`Данные по api не получены. Код ошибки:  ${response.status}`)
    //                 return;
    //             }
    //
    //             const resp = await response.json();
    //
    //             setIngredientsData(resp.data)
    //         } catch (error) {
    //             setErr(`Возникла ошибка:  ${error}`)
    //         }
    //     }
    //
    //     fetchData();
    // }, [])

    console.log(ingredientsData)

    if (err) {
        throw new Error(err)
    }

    return (
        <>
            <AppHeader/>
            {ingredientsData && ingredientsData.length > 0 &&
                <div className={styles.panel}>
                    <BurgerIngredients data={ingredientsData}/>
                    <BurgerConstructor data={ingredientsData}/>
                </div>}
        </>

    );
}

export default App;
