import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_REPEAT_PASSWORD,  
    SIGNUP_ERROR,
    SIGNUP_SUCCESS

} from '../actions/types';

const INITIAL_STATE = {
    name: 'Axel',
    email: 'ajaxel@gmail.com',
    password: '123456',
    repeatPassword: '123456',
    errorSignUp: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NAME: return { ...state, name: action.payload };
        case SET_EMAIL: return { ...state, email: action.payload };
        case SET_PASSWORD: return { ...state, password: action.payload };
        case SET_REPEAT_PASSWORD: return { ...state, repeatPassword: action.payload };
        case SIGNUP_ERROR: return { ...state, errorSignUp: action.payload };
        case SIGNUP_SUCCESS: return { ...state, nome: '', password: '', repeatPassword: '' };

        default: break;
    }

    return state;
}