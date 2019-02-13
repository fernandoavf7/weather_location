import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/location_list_container';
import { Grid, Col, Row } from 'react-flexbox-grid';
//import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/forecast_extended';
import { setCity } from './actions/index';
//import { store } from './store/index';


const cities = [
  "Santiago,cl",
  "Chicago,us",
  "Washington,us",
  "Madrid,es",
];


class App extends Component {
  constructor() {
    super();

    this.state = {
      city: null
    };
  }



  render() {
    const { city } = this.state;
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
            <LocationListContainer
              cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <div className="details">
              {city === null ? null : <ForecastExtended city={city} />}

            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;