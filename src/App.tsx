import React, { Component } from 'react';
import './App.css';
import Search from "./modules/search/containers/Search/Search";

// @TODO install sass

class App extends Component {
  render() {
      // const multiply = (value1: number, value2: number ):number  => {
      //   return value1 * value2;
      // };
      //
      // console.log(multiply(2, 3));
      return (
          <div className="App">
              <header className="App-header">
                  <label>Search
                      <Search/>
                  </label>
                  <button id="find">Find</button>
              </header>
          </div>
      );
  }
}

export default App;
