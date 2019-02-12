import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData/weather_data';


const ForecastItem = ({weekday, hour, data}) => (
   <div>
        <div>{weekday} Hora: {hour} hrs</div>
        <WeatherData data={data}/>
   </div>
);

ForecastItem.protoTypes = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }),
}

export default ForecastItem;