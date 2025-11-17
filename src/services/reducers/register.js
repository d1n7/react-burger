import {REGISTER_FAIL, REGISTER_FORM_SET, REGISTER_REQUEST, REGISTER_SUCCESS} from "../actions/register";

const initialState = {
    registerRequest: false,
    registerSuccess: false,
    registerFail: false,

    form: {
        email: undefined,
        password: undefined,
        name: undefined,
    }

}

export const setRegisterForm = (field, value) => ({type: REGISTER_FORM_SET, field, value})

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_FORM_SET:
            console.log("REGISTER_FORM_SET", state.form)
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.field]: action.value,
                }
            }
        case REGISTER_REQUEST:
            return {...state, registerRequest: true};
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSuccess: true,
                registerFail: false,
                registerRequest: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                registerFail: true,
                registerRequest: false,
                registerSuccess: false
            }
        default:
            return state;
    }
}