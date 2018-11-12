import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainMenu from './mainMenu';
import Daftar from './daftar';
import Login from './login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <switch>
            <Route exact path='/' component={MainMenu} />
            <Route exact path='/daftar' component={Daftar} />
            <Route exact path='/login' component={Login} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
