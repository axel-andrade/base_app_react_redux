import { combineReducers } from 'redux';

//importando reducers
import AuthReducer from './AuthReducer';

export default combineReducers({
    AuthReducer: AuthReducer

});