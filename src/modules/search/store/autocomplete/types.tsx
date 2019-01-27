export enum AutocompleteTypes {
    AUTOCOMPLETE = '@@search/AUTOCOMPLETE',
    AUTOCOMPLETE_SUCCESS = '@@search/AUTOCOMPLETE_SUCCESS',
    AUTOCOMPLETE_FAILURE = '@@search/AUTOCOMPLETE_FAILURE'
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

export type AutocompleteActions = AutocompleteAction | AutocompleteSuccessAction | AutocompleteFailureAction;
