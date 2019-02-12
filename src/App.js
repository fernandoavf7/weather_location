import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
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
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <div className="App">

       <LocationList 
       cities={cities}
       onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    );
  }
}

export default App;
