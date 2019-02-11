import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [SUN]:"day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers"
};



const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }

        <span>{` ${temperature} ºC`}</span>
    </div>
);

export default WeatherTemperature;