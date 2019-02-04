import React, { Component } from 'react';
import PlayerStatus from './containers/PlayerStatus'
import Inventory from './containers/Inventory'
import Supplies from './containers/Supplies'
import {connect} from 'react-redux'
import events from './data/events'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      this is your app and its ending one line at a time
      <PlayerStatus/>
      <Inventory/>
      </div>
    );
  }
}

export default App;
