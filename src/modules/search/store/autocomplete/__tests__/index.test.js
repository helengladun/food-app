import { reducer } from '../index';
import {
  SELECT_AVATAR, // Only ones related to the reducer being tested
} from '../../actions/types';
import {AutocompleteTypes} from "../types";

describe('INITIAL STATE', () => {
  test('is corrrect', () => {
    const action = {type: 'test action'};

    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});

describe('AUTOCOMPLETE', () => {
  test('returns the correct state', () => {
    const action = {
      type: AutocompleteTypes.AUTOCOMPLETE,
      payload: {
        isLoading: true
      }
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  })
});

describe('AUTOCOMPLETE SUCCESS', () => {
  test('returns the correct state', () => {
    const action = {
      type: AutocompleteTypes.AUTOCOMPLETE_SUCCESS,
      payload: {
        isLoading: false,
        suggestions: ['cucumber', 'salad']
      }
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  })
});

describe('AUTOCOMPLETE FAILURE', () => {
  test('returns the correct state', () => {
    const action = {
      type: AutocompleteTypes.AUTOCOMPLETE_SUCCESS,
      payload: {
        isLoading: false,
        error: 'error'
      }
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  })
});
