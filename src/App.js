import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LocationList from './components/location_list';
import { Grid, Col, Row } from 'react-flexbox-grid';
//import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/forecast_extended';
import {createStore} from 'redux';

const cities = [
  "Santiago,cl",
  "Mexico,mx",
  "Washington,us",
  "Madrid,es",
];

const store = createStore(() => {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor(){
    super();

    this.state = {
      city: null
    };
  }

  //se crea un handler de seleccion
   handleSelectedLocation = city => {
    this.setState({
      city : city
    });
    console.log(`handleSelectedLocation ${city}`);
    const action = {type: "setCity", value: city};
    store.dispatch(action);
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <Appbar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit" >
                Weather App
              </Typography>
            </Toolbar>
          </Appbar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <div className="details">
            {city === null? null:   <ForecastExtended city={city}/>}
            
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
