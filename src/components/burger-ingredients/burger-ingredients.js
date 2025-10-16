import React, {useEffect, useRef} from "react";
import styles from "./burger-ingredients.module.css";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientTypeList from "../ingredient-type-list/ingredient-type-list";
import Loading from "../../images/loading.svg";
import {useDispatch, useSelector} from "react-redux";
import {SET_CURRENT_TAB} from "../../services/actions/ingredients";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {CLOSE_INGREDIENT_INFORMATION} from "../../services/actions/info";

const BurgerIngredients = () => {
    const dispatch = useDispatch();

    const setCurrent = name => {
        dispatch({type: SET_CURRENT_TAB, currentTab: name})
    }

    const currentTab = useSelector(state => state.ingredients.currentTab);

    useEffect(() => {
        if (sectionRefs.current && sectionRefs.current[currentTab]) {
            sectionRefs.current[currentTab].scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }, [currentTab])

    const {ingredients, ingredientsRequest} = useSelector((state) => ({
        ingredientsRequest: state.ingredients.ingredientsRequest,
        ingredients: state.ingredients.ingredients
    }));

    const sectionRefs = useRef({});

    useEffect(() => {
        const curRef = sectionRefs.current

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target) {
                            case sectionRefs.current['bun']:
                                dispatch({type: SET_CURRENT_TAB, currentTab: "bun"});
                                break
                            case sectionRefs.current['sauce']:
                                dispatch({type: SET_CURRENT_TAB, currentTab: "sauce"});
                                break
                            case sectionRefs.current['main']:
                                dispatch({type: SET_CURRENT_TAB, currentTab: "main"});
                                break
                            default:
                                break;
                        }
                    }
                });
            },
            {threshold: 0.5} // Adjust as needed
        );

        Object.values(curRef).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            Object.values(curRef).forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [ingredients, dispatch]);

    const counterData = useSelector(state => {
        const data = new Map()
        state.burger.fillings.forEach(item => {
            if (data.has(item.id)) {
                data.set(item.id, data.get(item.id) + 1);
            } else {
                data.set(item.id, 1);
            }
        })

        if (state.burger.bun) {
            data.set(state.burger.bun, 2);
        }

        return data
    })

    const handleClose = () => {
        dispatch({
            type: CLOSE_INGREDIENT_INFORMATION,
        })
    }

    const modalIngredient = (<Modal header={"Детали ингредиента"} onClose={handleClose}>
        <IngredientDetails/>
    </Modal>)

    const infoModalVisible = useSelector(state => state.infoModal.visible);

    return (<section className={styles.sec}>
        <div className={`${styles.title} text_type_main-large text pt-10 pb-5`}>Соберите бургер</div>
        <div className={styles.tabs}>
            <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={currentTab === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
        {(ingredientsRequest || !ingredients || ingredients.length === 0) ?
            <div className={styles.loadContainer}>
                <img className={styles.loading} src={Loading} alt="Loading..."/>
            </div>
            :
            <div className={styles.scrolldiv}>
                <IngredientTypeList items={ingredients} type={"bun"} name={"Булки"} counterData={counterData}
                                    ref={(el) => (sectionRefs.current['bun'] = el)}/>
                <IngredientTypeList items={ingredients} type={"sauce"} name={"Соусы"} counterData={counterData}
                                    ref={(el) => (sectionRefs.current['sauce'] = el)}/>
                <IngredientTypeList items={ingredients} type={"main"} name={"Начинки"} counterData={counterData}
                                    ref={(el) => (sectionRefs.current['main'] = el)}/>
            </div>
        }
        {infoModalVisible && modalIngredient}
    </section>)
}

export default BurgerIngredients;