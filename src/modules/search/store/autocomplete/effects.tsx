// import { call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { Dispatch } from 'redux';
import axios from "axios";
import {autocomplete, autocompleteFailure, autocompleteSuccess} from "./actions";

export const autocompleteEffect = (value: string) => async (dispatch: Dispatch) => {
    dispatch(autocomplete());

    try {
        const result = await axios.get(`http://api.edamam.com/auto-complete?q=${value}&limit=10&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_APP_KEY}`);
        dispatch(autocompleteSuccess(result.data));

    } catch (e) {
        dispatch(autocompleteFailure("Couldn't get the suggestions"));
    }
};