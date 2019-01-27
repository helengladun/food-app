import React, { Component } from 'react';
import './App.css';
import Search from "./modules/search";

class App extends Component {
  render() {

      return (
          <div className="App">
              <header className="App-header">
                  <Search/>
                  <button id="find">Find</button>
              </header>
          </div>
      );
  }
}

export default App;
