import React, { Component, Fragment } from 'react';
import './App.css';
import { LoadingComponent } from "./modules/shared/LoadingComponent/LoadingComponent";
import {Router, Route, Switch, withRouter, RouteComponentProps} from "react-router-dom";
import { history } from './store';
import Loadable from 'react-loadable';

interface IProps {
}

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
};

const Search = Loadable({
  loader: () => import('./modules/search'),
  loading: LoadingComponent,
});

class App extends Component<IProps & RouteComponentProps<any>> {
  render() {
      return (
          <div className="App">
              <main>
                  <Router history={history}>
                      <Fragment>
                          <Switch>
                              <Route exact path="/" component={Home} />
                              <Route path="/search" component={Search} />
                          </Switch>
                      </Fragment>
                  </Router>
              </main>
          </div>
      );
  }
}

export default withRouter(App);
