import { combineReducers } from 'redux';
import { reducer as autocomplete, IAutocompleteState } from "./autocomplete";

export interface ISearchState {
    autocomplete: IAutocompleteState;
}

export const reducer = combineReducers<ISearchState>({
    autocomplete
});