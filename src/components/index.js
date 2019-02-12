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


import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: '20 m/s'
}
//ecma scrip 6, arrow function
//constante nombre (parametros) arrow (retorno)
//parentesis son para una sola linea, llaves para mas de una
class WheatherLocation extends Component {

    
    constructor(props) {
        //siempre va super
        super(props);

        const {city} = props;

        this.state = {
            city,
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
        const api_weather = getUrlWeatherByCity(this.state.city);
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
        const {onWeatherLocationClick} = this.props;
        //console.log(onWeatherLocationClick);
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                
                <Location city={city}></Location>
                
                {data ?<WeatherData data ={data}></WeatherData>: <CircularProgress size={50}/>}
             
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

//para solicitar siempre un typo de dato, si no es proporcionado el tipo correcto no compilará
WheatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}


export default WheatherLocation;