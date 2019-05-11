import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        // Your JavaScript app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCzZZEWWgoA8SNykiwE66YQZvsMUUHjWXU",
            authDomain: "baseapp-72855.firebaseapp.com",
            databaseURL: "https://baseapp-72855.firebaseio.com",
            projectId: "baseapp-72855",
            storageBucket: "baseapp-72855.appspot.com",
            messagingSenderId: "48770549121",
            appId: "1:48770549121:web:0cbe39170c6ea0ca"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    };

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}


export default App;  