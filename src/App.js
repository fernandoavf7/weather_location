import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LocationList from './components/location_list';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import Appbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

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
            <div className="details"></div>
          </Col>
        </Row>

      </Grid>


    );
  }
}

export default App;
