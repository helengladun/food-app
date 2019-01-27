import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { autocompleteEffect } from '../../store/autocomplete/effects';
import { connect } from 'react-redux';
import { IApplicationState } from "../../store";
import { getSuggestionValue, renderSuggestion } from './utils';

interface PropsFromDispatch {
    autocompleteEffect: any;
}

interface PropsFromState {
    isLoading: boolean | undefined,
    suggestions: string[] | undefined,
    errors: [] | undefined;
}

interface IProps extends PropsFromDispatch, PropsFromState {

}

class Autocomplete extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: ''
        };
    }

    onChange = (event: any, { newValue }: any): void => {
        this.setState({
            value: newValue // do I need to put onchange value to the store?
        });
    };

    onSuggestionsFetchRequested = ({ value }: any): void => {
        this.props.autocompleteEffect(value);
    };

    onSuggestionsClearRequested = () => {
        // this.props.autocompleteEffect('');
        this.setState({
            value: ''
        });
    };

    getSuggestionsFromProps = (props: IProps) => {
        const { suggestions }: any = props;
        return suggestions ? suggestions : [];
    };

    render() {
        const { value }: any = this.state;
        console.log(this.props); // why undefined here?
        const suggestions  = this.getSuggestionsFromProps(this.props);

        const inputProps = {
            placeholder: 'Type a product',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

const mapStateToProps = ({autocomplete}: IApplicationState) => ({
    isLoading: autocomplete.isLoading,
    suggestions: autocomplete.suggestions,
    errors: autocomplete.error
});

const mapDispatchToProps: PropsFromDispatch = {
    autocompleteEffect
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);