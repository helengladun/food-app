import React, { Component } from 'react';
import Autocomplete from "./containers/Autocomplete/Autocomplete";

export interface IState {
    // errorMessage: string
}

export interface IProps {

}

class Search extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        // this.state = {
        //     errorMessage: ''
        // };
    }

    // getTheError = (value: string) => {
    //    this.setState({
    //        errorMessage: value
    //    })
    // };

    render() {
        // const { errorMessage } = this.state;

        return (
            <label>Search
                <Autocomplete />
                {/*<Autocomplete getTheError={this.getTheError}/>*/}
                {/*{errorMessage && <span className="error">{errorMessage}</span>}*/}
            </label>
        )
    }
}

export default Search;