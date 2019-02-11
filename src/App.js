import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WheaterLocation from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App">

        <WheaterLocation city={"Santiago,cl"}/>
      </div>
    );
  }
}

export default App;
