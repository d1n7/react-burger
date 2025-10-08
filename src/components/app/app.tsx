import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"

const apiURL = "https://norma.nomoreparties.space/"

function App() {
    const [ingredientsData, setIngredientsData] = useState([]);
    const [err, setErr] = useState("");

    const endpoint = "api/ingredients";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const address = new URL(endpoint, apiURL).href
                const response = await fetch(address)
                if (!response.ok) {
                    setErr(`Данные по api не получены. Код ошибки:  ${response.status}`)
                    return;
                }

                const resp = await response.json();

                setIngredientsData(resp.data)
            } catch (error) {
                setErr(`Возникла ошибка:  ${error}`)
            }
        }

        fetchData();
    }, [])

    if (err) {
        throw new Error(err)
    }

    return (
        <>
            <AppHeader/>
            {ingredientsData !== undefined && ingredientsData.length > 0 &&
                <div className={styles.panel}>
                    <BurgerIngredients data={ingredientsData}/>
                    <BurgerConstructor data={ingredientsData}/>
                </div>}
        </>

    );
}

export default App;
