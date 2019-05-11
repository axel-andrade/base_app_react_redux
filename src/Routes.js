import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';


export default props => (
    <Router  hideNavBar={true}>
        <Stack key="root">
            <Scene key="Login" component={Login} title="Login" hideNavBar={true} initial/>
            <Scene key="Signup" component={Signup} title="Signup" hideNavBar={true}/>
            <Scene key="Home" component={Home} title="Home" hideNavBar={true} />

        </Stack>
    </Router>
);