import React, {Component} from 'react';
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

const data = {
    temperature: 31,
    weatherState: SUN,
    humidity: 10,
    wind: '20 m/s',
}


const data2 = {
    temperature: 27,
    weatherState: CLOUD,
    humidity: 99,
    wind: '990 m/s',
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
            data: data2,
        };
    }


    handleUpdateClick = () => {
        console.log("actualizado");
        this.setState({
            city: "Santiago",
            data: data2
        })
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