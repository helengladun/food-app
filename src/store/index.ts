import { applyMiddleware, createStore } from "redux";
import { createRootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import mySaga from './modules/search/store/autocomplete/effects';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(mySaga);

export const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(thunkMiddleware)));
