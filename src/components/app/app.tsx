import React, {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css"

const apiURL = "https://norma.nomoreparties.space/"

// TODO: counter
// TODO: ModalOverlay
// TODO: Box paddings
// TODO text swap

function App() {
    const [ingredientsData, setIngredientsData] = useState([]);

    const endpoint = "api/ingredients";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const address = new URL(endpoint, apiURL).href
                const response = await fetch(address);
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
