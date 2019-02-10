import React, { Component } from 'react';
import Autocomplete from "./containers/Autocomplete/Autocomplete";
import { Route, Link } from "react-router-dom";

const Results = () => {
    return (
        <div>Results</div>
    )
};

export interface IState {

}

export interface IProps {
    match: any
}

class Search extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

    }

    render() {
        console.log(this.props);
        const {match} = this.props;

        return (
            <label>Search
                <Route path={`${match.path}`} component={Autocomplete} />
                <Route path={`${match.path}/recipes`} component={Results} />
            </label>
        )
    }
}

export default Search;