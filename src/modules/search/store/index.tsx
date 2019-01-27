import { combineReducers } from 'redux';
import { reducer as autocomplete, IAutocompleteState } from "./autocomplete";

export interface IApplicationState {
    autocomplete: IAutocompleteState,
}

export interface SearchState {
    autocomplete: IAutocompleteState;
}

export const reducers = combineReducers<SearchState>({
    autocomplete
});