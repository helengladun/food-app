import { ActionCreator } from 'redux';
import { AutocompleteTypes, AutocompleteActions } from './types';

export const autocomplete:ActionCreator<AutocompleteActions>  = () => ({
    type: AutocompleteTypes.AUTOCOMPLETE,
    payload: {
        isLoading: true
    }
});

export const autocompleteSuccess: ActionCreator<AutocompleteActions> = (value: string[]) => ({
    type: AutocompleteTypes.AUTOCOMPLETE_SUCCESS,
    payload: {
        suggestions: value,
        isLoading: false
    }
});

export const autocompleteFailure: ActionCreator<AutocompleteActions> = (errors: []) => ({
    type: AutocompleteTypes.AUTOCOMPLETE_FAILURE,
    payload: {
        isLoading: false,
    },
    error: errors
});

