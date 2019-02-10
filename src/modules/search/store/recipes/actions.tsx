import { ActionCreator } from 'redux';
import { GetRecipesActions, GetRecipesTypes } from './types';

export const getRecipes:ActionCreator<GetRecipesActions>  = () => ({
    type: GetRecipesTypes.GET_RECIPES,
    payload: {
        isLoading: true
    }
});

export const getRecipesSuccess: ActionCreator<GetRecipesActions> = (value: string[]) => ({
    type: GetRecipesTypes.GET_RECIPES_SUCCESS,
    payload: {
        recipes: value,
        isLoading: false
    }
});

export const getRecipesFailure: ActionCreator<GetRecipesActions> = (errors: []) => ({
    type: GetRecipesTypes.GET_RECIPES_FAILURE,
    payload: {
        isLoading: false,
    },
    error: errors
});

