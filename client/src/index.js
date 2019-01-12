import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { changePage, toggleModal, fetchAndSetUser } from './reducers/reducers';

const logger = createLogger();
const rootReducer = combineReducers({ changePage, toggleModal, fetchAndSetUser });
const store = createStore(rootReducer, applyMiddleware(reduxThunk, logger));

ReactDOM.render((
    <Provider store = {store}>
        <App />
    </Provider>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
