import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import { reducers } from './modules/search/store';
// import mySaga from './modules/search/store/autocomplete/effects';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// sagaMiddleware.run(mySaga);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
