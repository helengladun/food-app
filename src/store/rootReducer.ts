import { combineReducers } from 'redux';
import { ISearchState, reducer as search} from "../modules/search/store";
import {connectRouter, RouterState} from "connected-react-router";
import { History } from 'history'

export interface IApplicationState {
    search: ISearchState,
    router: RouterState
}

export const createRootReducer = (history: History) => combineReducers<IApplicationState>({
    search,
    router: connectRouter(history)
});