import React, {Component} from 'react';

interface IProps {
  item: any
}

export class RecipeItem extends Component<IProps> {
  render() {
    const {img, label, url} = this.props.item;

    return (
      <div className="recipe">
        <div className="recipe__image">
          {img}
        </div>
        <div className="recipe__title">
          <a href={url} className="recipe__link">{label}</a>
        </div>
      </div>
    )
  }
}