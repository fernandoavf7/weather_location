import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './weather_temperature';
import WeatherExtraInfo from './weather_extra_info';



//uso de constantes para que no pueda haber errores
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weather';

const WeatherData = ({ data:{ temperature, weatherState, humidity, wind } }) => (
  
    <div>
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
    );

//usado para validar que se ingresa el tipo de dato correcto
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
};

export default WeatherData;