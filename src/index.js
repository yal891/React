import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//import redux features
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import { compose } from "redux";
import thunk from "redux-thunk";

import App from './App';
import reportWebVitals from './reportWebVitals';

import authReducer from "./store/reducers/auth";
import signupReducer from "./store/reducers/signup";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer,
});

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

registerServiceWorker();
