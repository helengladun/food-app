import React, {Component} from 'react';

export class Filters extends Component {
    render() {
        return (
            <div className="dropdown-menu" aria-labelledby="dLabel">
                <div className="col-md-12 filters">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <h4>Calories</h4>
                            <input type="text" value="" placeholder="From" className="from-to-area" id="cal-from"/>
                            <input type="text" value="" placeholder="To" className="from-to-area" id="cal-to"/>
                            <input type="hidden" value="" name="calories" id="calories-input"/>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <h4>Ingredients</h4>
                            <input type="text" value="" placeholder="Up to" name="ingr" className="from-to-area" id="ing-upto"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Diets</h4>
                        </div>
                    </div>
                    <div className="row" id="search-filter-diet">
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Vegetarian" value="vegetarian" name="health"
                                           className="pseudo-checkbox sr-only checked" checked/>
                                        <label htmlFor="calories-Vegetarian">Vegetarian</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Vegan" value="vegan" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Vegan">Vegan</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Paleo" value="paleo" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Paleo">Paleo</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-High-Fiber" value="high-fiber" name="diet"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-High-Fiber">High-Fiber</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-High-Protein" value="high-protein" name="diet"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-High-Protein">High-Protein</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Low-Carb" value="low-carb" name="diet"
                                           className="pseudo-checkbox sr-only checked" checked/>
                                        <label htmlFor="calories-Low-Carb">Low-Carb</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Low-Fat" value="low-fat" name="diet"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Low-Fat">Low-Fat</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Low-Sodium" value="low-sodium" name="diet"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Low-Sodium">Low-Sodium</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Low-Sugar" value="sugar-conscious" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Low-Sugar">Low-Sugar</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Alcohol-Free" value="alcohol-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Alcohol-Free">Alcohol-Free</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Balanced" value="balanced" name="diet"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Balanced">Balanced</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Allergies</h4>
                        </div>
                    </div>
                    <div className="row" id="search-filter-allergies">
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Gluten" value="gluten-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Gluten">Gluten</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Dairy" value="dairy-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Dairy">Dairy</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Eggs" value="egg-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Eggs">Eggs</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Soy" value="soy-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Soy">Soy</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Wheat" value="wheat-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Wheat">Wheat</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Fish" value="fish-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Fish">Fish</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Shellfish" value="shellfish-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Shellfish">Shellfish</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Tree Nuts" value="tree-nut-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Tree Nuts">Tree Nuts</label>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-6">
                            <ul>
                                <li>
                                    <input type="checkbox" id="calories-Peanuts" value="peanut-free" name="health"
                                           className="pseudo-checkbox sr-only"/>
                                        <label htmlFor="calories-Peanuts">Peanuts</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <span className="clear-selection">Clear Filters</span>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <span id="set-filters" className="more">Done</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}