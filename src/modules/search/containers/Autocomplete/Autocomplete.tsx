import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest'; // @TODO colored underlining
import { autocompleteEffect } from '../../store/autocomplete/effects';
import { connect } from 'react-redux';
import { IApplicationState } from "../../../../store/rootReducer";
import { getSuggestionValue, renderSuggestion } from './utils';
import { Push, push } from 'connected-react-router';
import { autocompleteChangeSearchValue } from '../../store/autocomplete/actions';

interface PropsFromDispatch {
    autocompleteEffect: any;
    autocompleteChangeSearchValue: any,
    push: Push
}

interface PropsFromState {
    searchValue: string,
    isLoading: boolean | undefined,
    suggestions: string[] | undefined,
    errors: [] | undefined
}

export interface IState {
    value: string
}

interface IProps extends PropsFromDispatch, PropsFromState {
}

class Autocomplete extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange = (event: any, { newValue }: any): void => {
        this.props.autocompleteChangeSearchValue(newValue);
        // if (!newValue) {
        //     return;
        // } else {
        //     autocompleteChangeSearchValue(newValue);
        // }
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

    clickHandler = () => {
        this.props.push({
            pathname: '/recipes'
            // search: `?q=${this.props.searchValue}`
        });
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
            <div className="search-box">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                {errors && <span>{errors}</span>}
                <button id="find" onClick={this.clickHandler}>Find</button>
            </div>
        );
    }
}

const mapStateToProps = ({search}: IApplicationState) => ({
    searchValue: search.autocomplete.searchValue,
    isLoading: search.autocomplete.isLoading,
    suggestions: search.autocomplete.suggestions,
    errors: search.autocomplete.error
});

const mapDispatchToProps: PropsFromDispatch = {
    autocompleteEffect,
    autocompleteChangeSearchValue,
    push
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);