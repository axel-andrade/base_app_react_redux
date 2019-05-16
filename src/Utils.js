import React from 'react';
import Toast from 'react-native-root-toast';
import DeviceInfo from 'react-native-device-info';
import { Platform, ToastAndroid } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Tooltip } from 'react-native-elements';
import { Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


let utils = {

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    renderTooltip(message) {
        return (
            <Tooltip withOverlay={false} popover={ <Text style={{fontSize: 12, color: 'white'}}>{message}</Text>}>
               <Icon name='alert-circle-outline' color='#ff0000' size={20} />
            </Tooltip>
        );
    },
    renderToast(message) {

        // Add a Toast on screen.
        let toast = Toast.show(message, {
            duration: 1000,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
        });

        return toast;

    },
    getDeviceInfo() {
        return {
            platform: Platform.OS,
            version: DeviceInfo.getSystemVersion(),
            manufacturer: DeviceInfo.getManufacturer(),
            model: DeviceInfo.getModel(),
            language: DeviceInfo.getDeviceLocale(),
            appVersion: DeviceInfo.getVersion(),
        }
    },
    async verifyConnection() {
        let connect = await NetInfo.isConnected.fetch().done();
        return connect;
    },
    formatPhone(input) {
        input = input || '';
        input = input.replace(")", "").replace("(", "").replace(" ", "").replace("-", "");
        var out = '';
        for (var i = 0; i < input.length; i++) {
            switch (i) {
                case 0:
                    out = out + "(";
                    break;
                case 2:
                    out = out + ") ";
                    break;
                case 7:
                    out = out + "-";
                    break;
                default:
                    break;
            }
            out = out + input.charAt(i);
        }
        return out;
    },
    formatDate(input) {
        input = input || '';
        input = input.replace("/", "").replace("/", "");
        var out = '';
        for (var i = 0; i < input.length; i++) {
            switch (i) {
                case 2:
                    out = out + "/";
                    break;
                case 4:
                    out = out + "/";
                    break;
                default:
                    break;
            }
            out = out + input.charAt(i);
        }
        return out;
    },
    renderToast(message) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    },
    errorEmail(email) {

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.length <= 0)
            return 'Campo obrigatório';

        else if (re.test(email))
            return '';

        else
            return 'Email inválido';
    },
    errorPassword(password) {
        if (password.length <= 0)
            return 'Campo obrigatório';
        else if (password.length >= 1 && password.length < 6)
            return 'A senha deve conter no mínimo seis caracteres';
        else
            return '';
    },
    errorName(name) {
        if (name.length <= 0)
            return 'Campo obrigatório';
        else
            return '';

    },
    errorRepeatPassword(password, repeatPassword) {
        if (password != repeatPassword)
            return 'As senhas não conferem';
        else
            return '';

    }
}

module.exports = utils;