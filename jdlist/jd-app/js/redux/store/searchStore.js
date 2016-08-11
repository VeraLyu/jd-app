import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import jdApp from '../reducers/jdreducer';


let store = createStore(jdApp,
    applyMiddleware(
        thunkMiddleware
    ));

export default store;
