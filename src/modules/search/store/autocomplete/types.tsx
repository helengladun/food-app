export enum AutocompleteTypes {
    AUTOCOMPLETE = '@@search/AUTOCOMPLETE',
    AUTOCOMPLETE_SUCCESS = '@@search/AUTOCOMPLETE_SUCCESS',
    AUTOCOMPLETE_FAILURE = '@@search/AUTOCOMPLETE_FAILURE',
    AUTOCOMPLETE_CHANGE_SEARCH_VALUE = '@@search/AUTOCOMPLETE_CHANGE_SEARCH_VALUE'
}

class AutocompleteAction {
    readonly type = AutocompleteTypes.AUTOCOMPLETE;
    constructor(public payload: {isLoading: boolean}) {};
}

class AutocompleteSuccessAction {
    readonly type = AutocompleteTypes.AUTOCOMPLETE_SUCCESS;
    constructor(public payload: {suggestions: string[], isLoading: boolean }) {}
}

class AutocompleteFailureAction {
    readonly type = AutocompleteTypes.AUTOCOMPLETE_FAILURE;
    constructor(public payload: {isLoading: boolean}, public error: []) {}
}

class AutocompleteChangeSearchValye {
    readonly type = AutocompleteTypes.AUTOCOMPLETE_CHANGE_SEARCH_VALUE;
    constructor(public payload: {searchValue: string}) {}
}

export type AutocompleteActions = AutocompleteAction | AutocompleteSuccessAction | AutocompleteFailureAction | AutocompleteChangeSearchValye;
