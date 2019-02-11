import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import WheaterLocation from './components/index';
import LocationList from './components/location_list';

const cities = [
  "Santiago,cl",
  "Bogota,col",
  "Mexico,mx",
  "Washington,us",
  "Madrid,es",
  "Lima,pe"
];

class App extends Component {
  render() {
    return (
      <div className="App">

       <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
