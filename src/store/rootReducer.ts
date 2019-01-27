import { combineReducers } from 'redux';
import { ISearchState, reducer as search} from "../modules/search/store";

export interface IApplicationState {
    search: ISearchState
}

export const createRootReducer = () => combineReducers<IApplicationState>({
    search
});