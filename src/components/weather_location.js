import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './location';
import WeatherData from './weather_data';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weather';

const location = "London,uk";
const api_key = "dd99a27a3420b1559dc48cd3aa63eaab";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const full_api = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd99a27a3420b1559dc48cd3aa63eaab";

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

    constructor(){
        //siempre va super
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }

    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(2);
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature: temperature,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            console.log(resolve);
            
            //crea una nueva promise
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });
        });    
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="App">
                <Location city={city}></Location>
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}


export default WheatherLocation;