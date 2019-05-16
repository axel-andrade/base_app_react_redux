import api from '../services/api';
import utils from '../Utils';
import NetInfo from "@react-native-community/netinfo";

import { Actions } from 'react-native-router-flux';
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
    HIDE_PASSWORD,
    HIDE_REPEAT_PASSWORD,
    VALIDATE_NAME

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

export const setPhone = (phone) => {

    return {
        type: SET_PHONE,
        payload: phone
    }
}

export const setBirthday = (birthday) => {

    return {
        type: SET_BIRTHDAY,
        payload: birthday
    }
}


export const signUp = ({ name, email, password, repeatPassword }) => {

    return dispatch => {

        if (password === repeatPassword && utils.validateEmail(email) && password.length >= 6 && name) {

            dispatch({ type: CLICK_SIGNUP, payload: true });
          
            //verificando conexão com a internet
            NetInfo.isConnected.fetch().done((isConnected) => {
                if (isConnected) {
                    api.post('/signUp', {

                        _ApplicationId: 'Ascvd8fs91Scj4HjF7Sk93sCw2eDfggDE',
                        name: name,
                        email: email,
                        password: password,
                        deviceInfo: utils.getDeviceInfo()

                    }).then((res) => {
                        dispatch({ type: SIGNUP_SUCCESS });
                        Actions.reset("Login");
                    }).catch((e) => {
                        utils.renderToast(e.response.data.error);
                    });
                }
                else
                    utils.renderToast("Sem conexão com com internet");
            });

        }
        else {

            dispatch({ type: VALIDATE_EMAIL, payload: utils.errorEmail(email) });
            dispatch({ type: VALIDATE_PASSWORD, payload: utils.errorPassword(password) });
            dispatch({ type: VALIDATE_REPEAT_PASSWORD, payload: utils.errorRepeatPassword(password, repeatPassword) });
            dispatch({ type: VALIDATE_NAME, payload: utils.errorName(name) });

        }
    }

}

export const logIn = ({ email, password }) => {


    return dispatch => {

        //verificando se os campos estão em branco e são válidos
        if (email.length > 0 && password.length >= 6 && utils.validateEmail(email)) {
            //disparando ação para o login em andamento
            dispatch({ type: CLICK_LOGIN, payload: true });

            //verificando conexão com a internet
            NetInfo.isConnected.fetch().done((isConnected) => {
                //se o dispositivo estiver conectado
                if (isConnected) {

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
                        utils.renderToast(e.response.data.error);
                    }, 10000);

                }
                else
                    utils.renderToast("Sem conexão com com internet");
            });

        }

        else {
            dispatch({ type: VALIDATE_EMAIL, payload: utils.errorEmail(email) });
            dispatch({ type: VALIDATE_PASSWORD, payload: utils.errorPassword(password) });
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
        return { type: VALIDATE_PASSWORD, payload: 'No mínimo seis caracteres' }

    else
        return { type: VALIDATE_PASSWORD, payload: '' }
}

export const validateName = (name) => {
    if (name.length <= 0)
        return { type: VALIDATE_NAME, payload: 'Campo obrigatório' }
    else
        return { type: VALIDATE_NAME, payload: '' }

}

export const validateRepeatPassword = (password, repeatPassword) => {
    if (password != repeatPassword)
        return { type: VALIDATE_REPEAT_PASSWORD, payload: 'As senhas não conferem' }
    else
        return { type: VALIDATE_REPEAT_PASSWORD, payload: '' }

}


export const showPassword = (hidePassword) => {
    return { type: HIDE_PASSWORD, payload: hidePassword }
}

export const showRepeatPassword = (hideRepeatPassword) => {
    return { type: HIDE_REPEAT_PASSWORD, payload: hideRepeatPassword }
}






