import utils from '../Utils';

import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_REPEAT_PASSWORD,
    SET_PHONE,
    SET_BIRTHDAY,
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS,
    CLICK_LOGIN,
    CLICK_SIGNUP,
    VALIDATE_EMAIL,
    VALIDATE_PASSWORD,
    VALIDATE_REPEAT_PASSWORD,
    VALIDATE_NAME,
    HIDE_PASSWORD,
    HIDE_REPEAT_PASSWORD

} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: 'ajaxeljunio@gmail.com',
    password: '123456',
    repeatPassword: '123456',
    tryLogin: false,
    trySignup: false,
    errorEmail: '',
    errorPassword: '',
    errorRepeatPassword: '',
    errorName: '',
    hidePassword: true,
    hideRepeatPassword: true,
    hideResetPassword: true,
    phone: '',
    birthday: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME: return { ...state, name: action.payload, errorName: '' };
        case SET_EMAIL: return { ...state, email: action.payload, errorEmail: '' };
        case SET_PASSWORD: return { ...state, password: action.payload, errorPassword: '' };
        case SET_REPEAT_PASSWORD: return { ...state, repeatPassword: action.payload, errorRepeatPassword: '' };
        case SET_PHONE: return { ...state, phone: action.payload };
        case SET_BIRTHDAY: return { ...state, birthday: action.payload };
        case SIGNUP_SUCCESS: return { ...state, nome: '', password: '', repeatPassword: '', trySignup: false };
        case LOGIN_SUCCESS: return { ...state, tryLogin: false };
        case CLICK_LOGIN: return { ...state, tryLogin: action.payload }
        case CLICK_SIGNUP: return { ...state, trySignup: action.payload }
        case VALIDATE_EMAIL: return { ...state, errorEmail: action.payload }
        case VALIDATE_PASSWORD: return { ...state, errorPassword: action.payload }
        case VALIDATE_REPEAT_PASSWORD: return { ...state, errorRepeatPassword: action.payload }
        case VALIDATE_NAME: return { ...state, errorName: action.payload }
        case HIDE_PASSWORD: return { ...state, hidePassword: action.payload }
        case HIDE_REPEAT_PASSWORD: return { ...state, hideRepeatPassword: action.payload }

        default: break;
    }

    return state;
} 