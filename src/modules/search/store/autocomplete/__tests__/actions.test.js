import configureStore from 'redux-mock-store';
import * as autocompleteActions from '../actions';
import {AutocompleteTypes} from "../types";

const mockStore = configureStore();
const store = mockStore();

describe('autocomplete actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('autocomplete start', () => {
    test('Dispatches the autocomplete action', () => {
      const expectedResult = [
        {
          payload: {
            isLoading: true
          },
          type: AutocompleteTypes.AUTOCOMPLETE
        }
      ];

      store.dispatch(autocompleteActions.autocomplete());
      expect(store.getActions()).toEqual(expectedResult);
    })
  });

  describe('autocomplete success', () => {
    test('Dispatches the autocomplete success action', () => {
      // const expectedResult = [
      //   {
      //     payload: {
      //       isLoading: true
      //     },
      //     type: AutocompleteTypes.AUTOCOMPLETE
      //   }
      // ];

      store.dispatch(autocompleteActions.autocompleteSuccess());
      // expect(store.getActions()).toEqual(expectedResult);
      expect(store.getActions()).toMatchSnapshot();
    })
  });

  describe('autocomplete failed', () => {
    test('Dispatches the autocomplete failed action', () => {
      store.dispatch(autocompleteActions.autocompleteFailure());
      expect(store.getActions()).toMatchSnapshot();
    })
  });

});
