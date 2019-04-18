import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import api from '@matt-test-org/api';

class App extends Component {

  render() {
    let a = new api();
    let message = a.hello() + " " + a.world();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {message}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
