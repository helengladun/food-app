import React, {Component, Fragment} from 'react';
import Autosuggest from 'react-autosuggest';
import { autocompleteEffect } from '../../store/autocomplete/effects';
import { connect } from 'react-redux';
import { IApplicationState } from "../../../../store/rootReducer";
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
    // getTheError? : (value: string) => void;
    // getTheError : any;
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

        const {errors} = this.props;
        const suggestions  = this.getSuggestionsFromProps(this.props);

        // throw errors to the parent
        // if (errors) {
        //     this.props.getTheError(errors);
        // }

        const inputProps = {
            placeholder: 'Type a product',
            value,
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

const mapStateToProps = ({search}: IApplicationState) => ({
    isLoading: search.autocomplete.isLoading,
    suggestions: search.autocomplete.suggestions,
    errors: search.autocomplete.error
});

const mapDispatchToProps: PropsFromDispatch = {
    autocompleteEffect
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);