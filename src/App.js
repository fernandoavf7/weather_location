import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WheaterLocation from './components/weather_location';

class App extends Component {
  render() {
    return (
      <div className="App">

        <WheaterLocation/>
      </div>
    );
  }
}

export default App;
