import { combineReducers } from 'redux';
import { reducer as autocomplete, IAutocompleteState } from "./autocomplete";
import { reducer as recipes, IRecipesState } from "./recipes";

export interface ISearchState {
    autocomplete: IAutocompleteState;
    recipes: IRecipesState
}

export const reducer = combineReducers<ISearchState>({
    autocomplete,
    recipes
});