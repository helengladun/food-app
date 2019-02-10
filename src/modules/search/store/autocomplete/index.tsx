import { AutocompleteTypes } from './types';
import { Reducer } from 'redux';

export interface IAutocompleteState {
    searchValue: string,
    isLoading: boolean,
    suggestions: string[],
    error: any,
}

const initialState: IAutocompleteState = {
    searchValue: '',
    isLoading: false,
    suggestions: [],
    error: []
};

export const reducer: Reducer<IAutocompleteState> = (state = initialState, action: any) => {
    switch (action.type) {
        case AutocompleteTypes.AUTOCOMPLETE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case AutocompleteTypes.AUTOCOMPLETE_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                suggestions: action.payload.suggestions
            };
        case AutocompleteTypes.AUTOCOMPLETE_FAILURE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                error: action.error
            };
        case AutocompleteTypes.AUTOCOMPLETE_CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.searchValue
            };
        default:
            return state;
    }
};