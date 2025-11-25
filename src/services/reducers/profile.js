import {
    CHANGE_SECTION,
    PROFILE_FAIL,
    PROFILE_FORM_SET,
    PROFILE_REQUEST,
    PROFILE_SAVE_FAIL,
    PROFILE_SAVE_REQUEST,
    PROFILE_SAVE_SUCCESS,
    PROFILE_SECTION_USER,
    PROFILE_SUCCESS
} from "../actions/profile";

const initialState = {
    form: {
        name: undefined,
        email: undefined,
        password: undefined,
    },

    profileSuccess: false,
    profileFailed: false,
    profileRequest: false,

    profileSaveSuccess: false,
    profileSaveFailed: false,
    profileSaveRequest: false,

    currentSection: PROFILE_SECTION_USER,
}

export const setProfileForm = (field, value) => ({type: PROFILE_FORM_SET, field, value})

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SECTION:
            return {
                ...state,
                currentSection: action.payload,
            }

        case PROFILE_SAVE_SUCCESS:
            return {
                ...state,
                profileSaveSuccess: true,
                profileRequest: false,
            }
        case PROFILE_SAVE_FAIL:
            return {
                ...state,
                profileSaveFailed: true,
                profileRequest: false,
            }
        case PROFILE_SAVE_REQUEST:
            return {
                ...state,
                profileSaveRequest: true,
            }
        case PROFILE_REQUEST:
            return {
                ...state,
                profileRequest: true,
            }
        case PROFILE_SUCCESS:
            console.log("action", action.user)
            return {
                ...state,
                form: {
                    name: action.user.name,
                    email: action.user.email,
                }
            }
        case PROFILE_FAIL:
            return {
                ...state,
                profileRequest: false,
                profileFailed: true,
            }
        case PROFILE_FORM_SET:
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