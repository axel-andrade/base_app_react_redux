import api from '../services/api';
import utils from '../Utils';

import { Actions } from 'react-native-router-flux';
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
    VALIDATE_PASSWORD,
    HIDE_PASSWORD

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

export const signUp = ({ name, email, password, repeatPassword }) => {

    if (password === repeatPassword) {
        return dispatch => {

            api.post('/signUp', {

                _ApplicationId: 'Ascvd8fs91Scj4HjF7Sk93sCw2eDfggDE',
                name: name,
                email: email,
                password: password,

            }).then((res) => {
                // const user = res.data.result;
                // AsyncStorage.multiSet([
                //     ['@CoachZac:sessionToken', JSON.stringify(user.sessionToken)],
                //     ['@CoachZac:user', JSON.stringify(user)],
                //     ['@CoachZac:configPlayer', JSON.stringify({ hasChangePlayer: true })],
                //     ['@CoachZac:configAnalyze', JSON.stringify({ hasChangeAnalyze: true })]
                // ]);


                dispatch({ type: SIGNUP_SUCCESS });
                Actions.reset("Home");
            }).catch((e) => {
                dispatch({ type: SIGNUP_ERROR, payload: e.response.data.error })
            });

        }
    }

    else
        return { type: SIGNUP_ERROR, payload: "As senhas não conferem" };

}

export const logIn = ({ email, password }) => {


    return dispatch => {


        //verificando se os campos estão em branco 
        if (email.length > 0 && password.length >=6) {
            //disparando ação para o login em andamento
            dispatch({ type: CLICK_LOGIN, payload: true });
            dispatch({ type: LOGIN_ERROR, payload: '' })


            api.post('/logIn', {

                _ApplicationId: "Ascvd8fs91Scj4HjF7Sk93sCw2eDfggDE",
                login: email,
                password: password,
                deviceInfo: utils.getDeviceInfo()

            }).then((res) => {
                // const user = res.data.result;
                // AsyncStorage.multiSet([
                //     ['@CoachZac:sessionToken', JSON.stringify(user.sessionToken)],
                //     ['@CoachZac:user', JSON.stringify(user)],
                //     ['@CoachZac:configPlayer', JSON.stringify({ hasChangePlayer: true })],
                //     ['@CoachZac:configAnalyze', JSON.stringify({ hasChangeAnalyze: true })]
                // ]);

                //dispatch({ type: LOGIN_SUCCESS });
                Actions.reset("Home");

            }).catch((e) => {
                dispatch({ type: LOGIN_ERROR, payload: e.response.data.error })
            }, 10000);

        }
        else {
            if (email === "")
                dispatch({ type: VALIDATE_EMAIL, payload: "O campo email é obrigatório" });

            if (password === "")
                dispatch({ type: VALIDATE_PASSWORD, payload: "O campo senha é obrigatório" });
            
            if (password === "")
                dispatch({ type: VALIDATE_PASSWORD, payload: "O campo senha é obrigatório" });
        }

    }

}

export const validateEmail = (email) => {
    if (email.length <= 0)
        return { type: VALIDATE_EMAIL, payload: '' }

    else if (utils.validateEmail(email))
        return { type: VALIDATE_EMAIL, payload: '' }

    else
        return { type: VALIDATE_EMAIL, payload: 'Email inválido' }
}

export const validatePassword = (password) => {
    if (password.length <= 0)
        return { type: VALIDATE_PASSWORD, payload: '' }

    else if (password.length >= 1 && password.length < 6)
        return { type: VALIDATE_PASSWORD, payload: 'A senha deve conter no mínimo seis caracteres' }

    else
        return { type: VALIDATE_PASSWORD, payload: '' }
}


export const showPassword = (hidePassword) => {
    return { type: HIDE_PASSWORD, payload: hidePassword }
}







