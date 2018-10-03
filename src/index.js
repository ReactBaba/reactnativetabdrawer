import React, { Component } from 'react';
import Navigator from './routes';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    applyMiddleware(sagaMiddleware)
);


export default class App extends Component {

    constructor(props) {
        super(props)
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
    }
}