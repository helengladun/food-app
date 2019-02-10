import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, createRootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

// import createSagaMiddleware from 'redux-saga';
// import mySaga from './modules/search/store/autocomplete/effects';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(mySaga);

export const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunkMiddleware)));