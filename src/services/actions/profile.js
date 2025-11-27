import {authUserAddress} from "../api";
import {genRequest} from "../../utils/fetch";
import {getCookieToken} from "../../utils/auth";

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAIL = 'PROFILE_FAIL';
export const PROFILE_FORM_SET = 'PROFILE_FORM_SET';
export const PROFILE_SAVE_REQUEST = 'PROFILE_SAVE_REQUEST';
export const PROFILE_SAVE_SUCCESS = 'PROFILE_SAVE_SUCCESS';
export const PROFILE_SAVE_FAIL = 'PROFILE_SAVE_FAIL';
export const CHANGE_SECTION = 'CHANGE_SECTION';
export const PROFILE_LOGOUT = 'PROFILE_LOGOUT';
export const PROFILE_RESET = 'PROFILE_RESET';

export const PROFILE_SECTION_USER = 'PROFILE_SECTION_USER';
export const PROFILE_SECTION_ORDERS = 'PROFILE_SECTION_USER';


export const saveProfile = () => (dispatch, getState) => {
    dispatch({type: PROFILE_SAVE_REQUEST})

    console.log("profileForm.form", getState().profileForm.form);

    const token = getCookieToken()

    const req = new Request(authUserAddress, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(getState().profileForm.form)
    })

    genRequest(req)
        .then(data => {
            console.log("PROFILE_SAVE_SUCCESS", data);
            dispatch({type: PROFILE_SAVE_SUCCESS, data})
        })
        .catch(err => {
            console.error("PROFILE_SAVE_FAIL", err)
            dispatch({type: PROFILE_SAVE_FAIL})
        });

}

export const userProfile = () => (dispatch, getState) => {
    const token = getCookieToken()
    if (!token) {
        dispatch({type: PROFILE_FAIL})

        return
    }

    dispatch({type: PROFILE_REQUEST});

    //  const token = localStorage.getItem("refreshToken");

    const req = new Request(authUserAddress, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`,
        },
    })

    genRequest(req)
        .then(data => {
            console.log(data);
            if (data.success) {
                const user = data.user;
                console.log("user", user);
                dispatch({type: PROFILE_SUCCESS, user});
            }

        })
        .catch(err => {
            console.error(err)
            dispatch({type: PROFILE_FAIL})
        });
}