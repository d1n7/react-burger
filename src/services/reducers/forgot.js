import {
    FORM_RECOVERY_PASSWORD_FAILED,
    FORM_RECOVERY_PASSWORD_SET,
    FORM_RECOVERY_PASSWORD_SUBMIT,
    FORM_RECOVERY_PASSWORD_SUCCESS
} from "../actions/forgot";

const initialState = {
    form: {
        email: undefined,
    },
    recoveryRequest: false,
    recoveryFailed: false,
    recoverySuccess: false,
}

export const setForgotFormValue = (field, value) => ({type: FORM_RECOVERY_PASSWORD_SET, field, value})

export const formForgotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_RECOVERY_PASSWORD_SET:
            return {
                form: {
                    ...state.form,
                    [action.field]: action.value,
                }
            }
        case FORM_RECOVERY_PASSWORD_SUBMIT:
            return {
                ...state,
                recoveryRequest: true,
                recoveryFailed: false,
            }
        case FORM_RECOVERY_PASSWORD_SUCCESS:
            return {
                ...state,
                recoveryFailed: false,
                recoveryRequest: false,
                recoverySuccess: true,
            }
        case FORM_RECOVERY_PASSWORD_FAILED:
            return {
                ...state,
                recoveryFailed: true,
                recoveryRequest: false,
            }
        default:
            return state
    }

}