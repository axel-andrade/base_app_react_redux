import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    SET_REPEAT_PASSWORD,  
    SIGNUP_ERROR,
    SIGNUP_SUCCESS

} from './types';

export const setEmail = (email) => {

    return {
        type: SET_EMAIL,
        payload: email
    }
}

export const setName = (name) => {

    return {
        type: SET_NAME,
        payload: name
    }
}

export const setPassword = (password) => {

    return {
        type: SET_PASSWORD,
        payload: password
    }
}


export const setRepeatPassword = (repeatPassword) => {

    return {
        type: SET_REPEAT_PASSWORD,
        payload: repeatPassword
    }
}


export const signUp = (user) => {


    if (user.password === user.repeatPassword) {
        return dispatch => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(user => {
                    dispatch({ type: SIGNUP_SUCCESS });
                    Actions.Home();
                })
                .catch(error => dispatch({ type: SIGNUP_ERROR, payload: error.message }))

        }
    }
    else
        return { type: SIGNUP_ERROR, payload: "As senhas não conferem" };

}






