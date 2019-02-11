import React, { Component } from 'react';
import Location from './location';
import WeatherData from './WeatherData/weather_data';
import transformWeather from '../services/transformWeather';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../constants/weather';

import { api_weather } from './../constants/api_url';
import CircularProgress from '@material-ui/core/CircularProgress';

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: '20 m/s',
    city: "Santiago"
}
//ecma scrip 6, arrow function
//constante nombre (parametros) arrow (retorno)
//parentesis son para una sola linea, llaves para mas de una
class WheatherLocation extends Component {

    constructor() {
        //siempre va super
        super();
        this.state = {
            data: data
        };
        console.log("constructor");
    }

    componentDidMount(prevProps, prevState) {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillMount() {
        console.log("UNSAFE (not use) componentWillMount");
    }

    componentWillUpdate() {
        console.log("UNSAFE (not use) componentWillUpdate");
    }


    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            //console.log(resolve);

            //crea una nueva promise
            return resolve.json();
        }).then(data => {
            console.log(data);
            const newWeather = transformWeather(data);

            //debugger;
            this.setState({
                data: newWeather
            });
        });
    }

    render() {
        console.log("render");
        const { data } = this.state;
        return (
            <div className="App">
                
                <Location city={data.city}></Location>
                
                {data != null ?<WeatherData data ={data}></WeatherData>: <CircularProgress size={50}/>}
             
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}


export default WheatherLocation;