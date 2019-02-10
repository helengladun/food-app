import { GetRecipesTypes } from './types';
import { Reducer } from 'redux';

export interface IRecipesState {
    isLoading: boolean,
    recipes: string[],
    error: any,
}

const initialState: IRecipesState = {
    isLoading: false,
    recipes: [],
    error: []
};

export const reducer: Reducer<IRecipesState> = (state = initialState, action: any) => {
    switch (action.type) {
        case GetRecipesTypes.GET_RECIPES:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case GetRecipesTypes.GET_RECIPES_SUCCESS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                recipes: action.payload.recipes
            };
        case GetRecipesTypes.GET_RECIPES_FAILURE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                error: action.error
            };
        default:
            return state;
    }
};