import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"

const apiURL = "https://norma.nomoreparties.space/api/ingredients"

// TODO: counter
// TODO: ModalOverlay
// TODO: Box paddings

function App() {
    const [ingredientsData, setIngredientsData] = useState([]);

    useEffect(() => {
        console.log("Ingredients loaded");
        const fetchData = async () => {
            try {
                const response = await fetch(apiURL);
                if (!response.ok) {
                    throw new Error("Could not fetch ingredients");
                }
                const resp = await response.json();
                console.log(resp);
                setIngredientsData(resp.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [])

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
