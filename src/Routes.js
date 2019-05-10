import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/Login';
import Signup from './components/Signup';


export default props => (
    <Router  hideNavBar={true}>
        <Stack key="root">
            <Scene key="Login" component={Login} title="Login" hideNavBar={true}></Scene>
            <Scene key="Signup" component={Signup} title="Signup" hideNavBar={true}></Scene>
        </Stack>
    </Router>
);