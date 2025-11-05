import { resetPasswordAddress} from "../api";
import {genRequest} from "../../utils/fetch";

export const PASSWORD_RESET_SUBMIT = 'PASSWORD_RESET_SUBMIT';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED';
export const PASSWORD_RESET_FORM_SET = 'PASSWORD_RESET_FORM_SET';

export const resetPassword = () => (dispatch, getState) => {
    dispatch({type: PASSWORD_RESET_SUBMIT})

    console.log("getState()", getState().resetForm.form);

    const req = new Request(resetPasswordAddress, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(getState().resetForm.form)
    })

    genRequest(req).then(response => {
        dispatch({type: PASSWORD_RESET_SUCCESS})
    }).catch(error => {
        console.error(error);
        dispatch({type: PASSWORD_RESET_FAILED});
    })

}