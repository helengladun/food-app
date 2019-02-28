import React, {Component, Fragment} from 'react';
import Autosuggest from 'react-autosuggest'; // @TODO colored underlining
import { autocompleteEffect } from '../../store/autocomplete/effects';
import { connect } from 'react-redux';
import { IApplicationState } from "../../../../store/rootReducer";
import { getSuggestionValue, renderSuggestion } from './utils';
import { autocompleteChangeSearchValue, autocompleteClearSearchValue } from '../../store/autocomplete/actions';
import { createSelector } from "reselect";

interface PropsFromDispatch {
  autocompleteEffect: any;
  autocompleteChangeSearchValue: any,
  autocompleteClearSearchValue: any
}

interface PropsFromState {
    searchValue: string,
    isLoading: boolean | undefined,
    suggestions: string[] | undefined,
    errors: [] | undefined
}

interface IProps extends PropsFromDispatch, PropsFromState {
}

class Autocomplete extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    onChange = (event: any, { newValue }: any): void => {
        if (!newValue) {
          this.props.autocompleteClearSearchValue();
        } else {
            this.props.autocompleteChangeSearchValue(newValue);
        }
    };

    onSuggestionsFetchRequested = ({ value }: any): void => {
        this.props.autocompleteEffect(value);
    };

    onSuggestionsClearRequested = () => {

    };

    getSuggestionsFromProps = (props: IProps) => {
        const { suggestions } = props;
        return suggestions ? suggestions : [];
    };

    render() {
        const {errors, searchValue} = this.props;
        const suggestions  = this.getSuggestionsFromProps(this.props);

        const inputProps = {
            placeholder: 'Type a product',
            value: searchValue,
            onChange: this.onChange
        };

        return (
            <Fragment>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                {errors && <span>{errors}</span>}
            </Fragment>
        );
    }
}

const getSuggestionsSelector = (autocomplete: any) => autocomplete.suggestions;

export const getSuggestions = createSelector(
  [ getSuggestionsSelector ],
  (suggestions) => suggestions);

const mapStateToProps = ({search}: IApplicationState) => ({
    searchValue: search.autocomplete.searchValue,
    isLoading: search.autocomplete.isLoading,
    suggestions: getSuggestions(search.autocomplete),
    errors: search.autocomplete.error
});

const mapDispatchToProps: PropsFromDispatch = {
  autocompleteEffect,
  autocompleteChangeSearchValue,
  autocompleteClearSearchValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);