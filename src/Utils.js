import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

let utils = {
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    getDeviceInfo(){
        return {
            platform: Platform.OS,
            version: DeviceInfo.getSystemVersion(),
            manufacturer: DeviceInfo.getManufacturer(),
            model: DeviceInfo.getModel(),
            language: DeviceInfo.getDeviceLocale(),
            appVersion: DeviceInfo.getVersion(),
        }
    }
    

    
}

module.exports = utils;