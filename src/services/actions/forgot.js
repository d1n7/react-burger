import { recoveryAddress} from "../api";
import {genRequest} from "../../utils/fetch";

export const FORM_RECOVERY_PASSWORD_SET = 'FORM_RECOVERY_PASSWORD_SET';
export const FORM_RECOVERY_PASSWORD_SUBMIT = 'FORM_RECOVERY_PASSWORD_SUBMIT';
export const FORM_RECOVERY_PASSWORD_SUCCESS = 'FORM_RECOVERY_PASSWORD_SUCCESS';
export const FORM_RECOVERY_PASSWORD_FAILED = 'FORM_RECOVERY_PASSWORD_FAILED';

export const recoveryEmail = (email) => (dispatch, getState) => {
    dispatch({type: FORM_RECOVERY_PASSWORD_SUBMIT});

    const data = JSON.stringify({email: email});

    const req = new Request(recoveryAddress, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })

    genRequest(req).then(resp => {
        console.log(resp);
        dispatch({type: FORM_RECOVERY_PASSWORD_SUCCESS, resp});
    }).catch(error => {
        console.error(error);
        dispatch({type: FORM_RECOVERY_PASSWORD_FAILED,});
    })

}