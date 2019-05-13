import utils from '../Utils';

import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_REPEAT_PASSWORD,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    CLICK_LOGIN,
    VALIDATE_EMAIL,
    VALIDATE_PASSWORD

} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    errorSignUp: '',
    errorLogIn: '',
    tryLogin: false,
    errorEmail: '',
    errorPassword: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME: return { ...state, name: action.payload, errorSignUp: '' };
        case SET_EMAIL: return { ...state, email: action.payload, errorLogIn: '', errorSignUp: '', errorEmail: '' };
        case SET_PASSWORD: return { ...state, password: action.payload, errorLogIn: '', errorSignUp: '', errorPassword: '' };
        case SET_REPEAT_PASSWORD: return { ...state, repeatPassword: action.payload };
        case SIGNUP_ERROR: return { ...state, errorSignUp: action.payload };
        case SIGNUP_SUCCESS: return { ...state, nome: '', password: '', repeatPassword: '' };
        case LOGIN_ERROR: return { ...state, errorLogIn: action.payload, tryLogin: action.payload.length > 0 ? false : true };
        case LOGIN_SUCCESS: return { ...state, tryLogin: false };
        case CLICK_LOGIN: return { ...state, tryLogin: action.payload }
        case VALIDATE_EMAIL: return { ...state, errorEmail: action.payload }
        case VALIDATE_PASSWORD: return { ...state, errorPassword: action.payload }

        default: break;
    }

    return state;
} 