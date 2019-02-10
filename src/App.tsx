import React, { Component, Fragment } from 'react';
import './App.css';
import {Router, Route, Switch, withRouter, RouteComponentProps} from "react-router-dom";
import Autocomplete from "./modules/search/containers/Autocomplete/Autocomplete";
import Recipes from "./modules/search/containers/Recipes/Recipes";
import { history } from './store'

interface IProps {
}

class App extends Component<IProps & RouteComponentProps<any>> {
  render() {

      return (
          <div className="App">
              <main>
                  <Router history={history}>
                      <Fragment>
                          <Switch>
                              <Route exact path="/" component={Autocomplete} />
                              <Route path="/recipes" component={Recipes} />
                          </Switch>
                      </Fragment>
                  </Router>
              </main>
          </div>
      );
  }
}

export default withRouter(App);
