import {genRequest} from "../../utils/fetch";
import {authRegisterAddress} from "../api";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_FORM_SET = 'REGISTER_FORM_SET';


export const registerUser = () => (dispatch, getState) => {
    dispatch({type: REGISTER_REQUEST});

    console.log("getState()", getState().registerForm.form);

    const req = new Request(authRegisterAddress, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(getState().registerForm.form),
    })

    genRequest(req)
        .then(data => {
            console.log(data);
            dispatch({type:REGISTER_SUCCESS})
        })
        .catch(err => {
            console.error(err)
            dispatch({type:REGISTER_FAIL})
        });
}