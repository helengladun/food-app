import { Dispatch } from 'redux';
import axios from "axios";
import {getRecipes, getRecipesSuccess, getRecipesFailure} from "./actions";

export const getRecipesEffect = (value: string) => async (dispatch: Dispatch) => {
    dispatch(getRecipes());

    try {
        const result = await axios.get('http://api.edamam.com/search', {
            params: {
                q: value,
                app_id: process.env.REACT_APP_RECIPES_APP_IP,
                app_key: process.env.REACT_APP_RECIPES_APP_KEY,
                from: 0,
                to: 10
            }
        });
        
        dispatch(getRecipesSuccess(result.data));

    } catch (e) {
        dispatch(getRecipesFailure("Couldn't get recipes"));
    }
};