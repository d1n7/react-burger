export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILED = 'GET_ITEMS_FAILED';

const apiURL = "https://norma.nomoreparties.space/"
const ingredientsEndpoint = "api/ingredients";



export const getIngredients = () => dispatch => {
    dispatch({type: GET_ITEMS_REQUEST});

    try {
        const address = new URL(ingredientsEndpoint, apiURL).href
        fetch(address).then(res => {
            console.log(res);
            res.json().then(resp => {
                console.log(resp.data)
                dispatch({
                    type: GET_ITEMS_SUCCESS,
                    ingredients: resp.data
                });
            })

        })
        // console.log(response)
        // if (!response.ok) {
        //     dispatch({type: GET_ITEMS_FAILED});
        //     return;
        // }
        // console.log(response)
        //
        // const resp = response.json();


    } catch (error) {
        dispatch({type: GET_ITEMS_FAILED});
    }

}