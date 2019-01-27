// import { call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { Dispatch } from 'redux';
import axios from "axios";
import {autocomplete, autocompleteFailure, autocompleteSuccess} from "./actions";

const YOUR_APP_ID = 'cbbf07ff';
const YOUR_APP_KEY = 'e0389e24d9fe57d2e3bc72fc805958ab';

export const autocompleteEffect = (value: string) => async (dispatch: Dispatch) => {
    const inputValue = value.trim().toLowerCase();
    // const inputLength = inputValue.length;
    dispatch(autocomplete());

    try {
        const result = await axios.get(`http://api.edamam.com/auto-complete?q=${value}&limit=10&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
        dispatch(autocompleteSuccess(result.data));

    } catch (e) {
        dispatch(autocompleteFailure("Couldn't get the suggestions"));
    }
};