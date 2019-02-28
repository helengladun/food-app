export enum GetRecipesTypes {
    GET_RECIPES = '@@search/GET_RECIPES',
    GET_RECIPES_SUCCESS = '@@search/GET_RECIPES_SUCCESS',
    GET_RECIPES_FAILURE = '@@search/GET_RECIPES_FAILURE',
}

class GetRecipesAction {
    readonly type = GetRecipesTypes.GET_RECIPES;
    constructor(public payload: {isLoading: boolean}) {};
}

class GetRecipesSuccessAction {
    readonly type = GetRecipesTypes.GET_RECIPES_SUCCESS;
    constructor(public payload: {recipes: string[], isLoading: boolean }) {}
}

class GetRecipesFailureAction {
    readonly type = GetRecipesTypes.GET_RECIPES_FAILURE;
    constructor(public payload: {isLoading: boolean}, public error: []) {}
}

export type GetRecipesActions = GetRecipesAction | GetRecipesSuccessAction | GetRecipesFailureAction;
