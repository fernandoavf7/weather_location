import convert from 'convert-units';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weather';


const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(2);
}

const getWeatherState = weather_data => {
    return SUN;
}

const transformWeather = weather_data => {
    //console.log(weather_data.name);
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = parseFloat(getTemp(temp),1);
    const city = weather_data.name;

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
        city: city
    }
    return data;
}

export default transformWeather;