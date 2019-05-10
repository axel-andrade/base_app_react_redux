import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';

const app = props => (
    <App/>
);

AppRegistry.registerComponent(appName, () => app);
