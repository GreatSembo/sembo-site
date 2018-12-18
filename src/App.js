import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Valentina from './Valentina';
import Reward from './Reward';

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
          <Header/>
         
          <Switch>

            <Route  exact path="/" component={Valentina} />

            <Route  path="/reward" component={Reward} />

          </Switch>

        </div>
      
    );
  }
}

export default App;
