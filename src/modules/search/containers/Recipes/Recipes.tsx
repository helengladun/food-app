import React, {Component} from 'react';
import { IApplicationState } from "../../../../store/rootReducer";
import { connect } from 'react-redux';
import {getRecipesEffect} from '../../store/recipes/effects';
import {RecipeItem} from "../../components/RecipeItem/RecipeItem";

interface PropsFromDispatch {
    getRecipesEffect: any
}

interface PropsFromState {
    searchValue: string,
    recipes: any
}

export interface IState {

}

interface IProps extends PropsFromDispatch, PropsFromState {

}

class Recipes extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecipesEffect(location.search);
    }

    render() {
        const { recipes } = this.props;

        if (!recipes.hits || recipes.hits.length <= 0) {
            return <div>No results</div>
        }

        return (
            <div className="recipes-list">
                {recipes.hits.map((hit: any, i: number) => {
                    return (
                        <RecipeItem key={i} item={hit.recipe}/>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = ({search}: IApplicationState) => ({
    searchValue: search.autocomplete.searchValue,
    recipes: search.recipes.recipes,
});

const mapDispatchToProps: PropsFromDispatch = {
    getRecipesEffect
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);