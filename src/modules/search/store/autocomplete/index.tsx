import { AutocompleteTypes } from './types';
import { Reducer } from 'redux';

export interface IAutocompleteState {
    isLoading: boolean,
    suggestions: string[],
    error: any,
}
const initialState: IAutocompleteState = {
    isLoading: false,
    suggestions: [],
    error: []
};

export const reducer: Reducer<IAutocompleteState> = (state = initialState, action: any) => {
    switch (action.type) {
        case AutocompleteTypes.AUTOCOMPLETE:
            return action.payload.isLoading;
        case AutocompleteTypes.AUTOCOMPLETE_SUCCESS:
            return {
                isLoading: action.payload.isLoading,
                suggestions: action.payload.suggestions
            };
        case AutocompleteTypes.AUTOCOMPLETE_FAILURE:
            return {
                isLoading: action.payload.isLoading,
                error: action.error
            };
        default:
            return state;
    }
};