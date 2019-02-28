import React, { Component, Fragment } from 'react';
import FilterForm from "../../modules/search/containers/FilterForm/FilterForm";
import Recipes from "../../modules/search/containers/Recipes/Recipes";
import { Route } from "react-router-dom";
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IState {

}

export interface IProps {
    match: any
}

class Search extends Component<IProps & RouteComponentProps<any>, IState> {
    constructor(props: IProps & RouteComponentProps) {
        super(props);
    }

    render() {
        const {match} = this.props;

        return (
            <Fragment>
                <Route path={`${match.path}`} exact component={FilterForm} />
                <Route path={`${match.path}/recipes`} component={Recipes} />
            </Fragment>
        )
    }
}

export default withRouter(Search);