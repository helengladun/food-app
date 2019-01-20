import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

const YOUR_APP_ID = 'cbbf07ff';
const YOUR_APP_KEY = 'e0389e24d9fe57d2e3bc72fc805958ab';

interface IProps {

}

const getSuggestionValue = (suggestion: any) => suggestion.trim();

const renderSuggestion = (suggestion: any) => (
    <span>
        {suggestion}
    </span>
);

class Search extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            value: '',
            suggestions: [],
            isLoading: false
        };
    }

    getDataFromApi = async (query: string) => {
        const response = await axios.get(`http://api.edamam.com/auto-complete?q=${query}&limit=10&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Unable to get the food data')
        }
    };

    getSuggestions = (value: string) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        this.setState({
            isLoading: true
        });

        this.getDataFromApi(value).then((data) => {
            const result = inputLength === 0 ? [] : data;
            this.setState({
                isLoading: false,
                suggestions: result
            });
        }, (err) => {
            console.log(err);
        });
    };

    onChange = (event: any, { newValue }: any): void => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }: any): void => {
        this.getSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions }: any = this.state;
        console.log(suggestions);

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

export default Search