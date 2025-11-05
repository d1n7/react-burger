import {
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_FORM_SET,
    PASSWORD_RESET_SUBMIT,
    PASSWORD_RESET_SUCCESS
} from "../actions/reset";

const initialState = {
    form: {
        password: undefined,
        token: undefined,
    },
    passwordResetRequest: false,
    passwordResetFailed: false,
    passwordResetSuccess: false,
}

export const setPasswordResetValue = (field, value) => ({type: PASSWORD_RESET_FORM_SET, field, value})

export const passwordResetReducer = (state = initialState, action) => {
    switch (action.type) {
        case PASSWORD_RESET_FORM_SET:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.field]: action.value,
                },
            }
        case PASSWORD_RESET_SUBMIT:
            return {
                ...state,
                passwordResetRequest: true,
                passwordResetFailed: false,
                passwordResetSuccess: false,
            }
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                passwordResetRequest: false,
                passwordResetSuccess: true,
                passwordResetFailed: false,
            }
        case PASSWORD_RESET_FAILED:
            return {
                ...state,
                passwordResetRequest: false,
                passwordResetFailed: true,
                passwordResetSuccess: false,
            }
        default:
            return state;
    }
}

