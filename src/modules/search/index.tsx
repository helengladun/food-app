import React, { Component } from 'react';
import Autocomplete from "./containers/Autocomplete/Autocomplete";

class Search extends Component {
    render() {
        return (
            <label>Search
                <Autocomplete/>
            </label>
        )
    }
}

export default Search;