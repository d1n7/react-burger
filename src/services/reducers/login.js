import {LOGIN_FORM_SET} from "../actions/login";

const initialState = {
    form: {
        email: '',
        password: ''
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FORM_SET:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.field]: action.value
                }
            }
        default:
            return state;
    }
}